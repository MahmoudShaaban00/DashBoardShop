import {
    Injectable,
    NotFoundException,
    BadRequestException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Sale, SaleDocument } from '../../core/schema/sales.module';
import { Product, ProductDocument } from '../../core/schema/product.module';

@Injectable()
export class SalesService {

    constructor(
        @InjectModel(Sale.name)
        private saleModel: Model<SaleDocument>,

        @InjectModel(Product.name)
        private productModel: Model<ProductDocument>,

        @InjectConnection()
        private connection: Connection,
    ) { }

    // ✅ عملية البيع
   async sellProduct(productId: string, quantity: number) {

    const product = await this.productModel.findById(productId);

    if (!product) throw new NotFoundException('Product not found');
    if (product.stock < quantity) throw new BadRequestException('Not enough stock');

    product.stock -= quantity;
    product.soldCount += quantity;

    await product.save();

    const sale = await this.saleModel.create({
        product: product._id,
        quantity,
        totalPrice: product.price * quantity
    });

    return sale;
}
    // ✅ مبيعات يوم معين
    async getDailySales(date: string) {

        const start = new Date(date);
        start.setHours(0, 0, 0, 0);

        const end = new Date(date);
        end.setHours(23, 59, 59, 999);

        return await this.saleModel
            .find({
                createdAt: { $gte: start, $lte: end }
            })
            .populate('product');
    }

    // ✅ إجمالي مبيعات اليوم
    async getDailyTotal(date: string) {

        const start = new Date(date);
        start.setHours(0, 0, 0, 0);

        const end = new Date(date);
        end.setHours(23, 59, 59, 999);

        const result = await this.saleModel.aggregate([
            {
                $match: {
                    createdAt: { $gte: start, $lte: end }
                }
            },
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: "$totalPrice" },
                    totalQuantity: { $sum: "$quantity" }
                }
            }
        ]);

        return result[0] || {
            totalSales: 0,
            totalQuantity: 0
        };
    }
}
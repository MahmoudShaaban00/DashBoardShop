import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from '../../core/schema/sales.schema';
import { Product, ProductSchema } from '../../core/schema/product.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sale.name, schema: SaleSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT, // لازم موجود على Vercel
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [SalesController],
  providers: [SalesService], // ✅ شيل JwtService من هنا
})
export class SalesModule {}
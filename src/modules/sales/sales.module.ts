import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from '../../core/schema/sales.module';
import { Product, ProductSchema } from '../../core/schema/product.module'; // صح المسار
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]), // <--- مهم
  ],
  controllers: [SalesController],
  providers: [SalesService,JwtService],
})
export class SalesModule {}
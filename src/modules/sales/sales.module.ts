import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from '../../core/schema/sales.schema';
import { Product, ProductSchema } from '../../core/schema/product.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sale.name, schema: SaleSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
    AuthModule, // 👈 استورد AuthModule فقط
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
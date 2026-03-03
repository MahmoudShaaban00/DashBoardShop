import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from '../../core/schema/product.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
    ]),
    AuthModule, // 👈 استورد AuthModule فقط
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
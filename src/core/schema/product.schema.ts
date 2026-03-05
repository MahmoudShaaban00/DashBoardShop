import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {

  @Prop({
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100
  })
  name: string;

  @Prop({
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 1000
  })
  description: string;

  @Prop({
    required: true,
    min: 0
  })
  price: number;

  @Prop({
    required: true,
    min: 0,
    default: 0
  })
  stock: number;

  @Prop({ trim: true })
  size?: string;

  @Prop({ trim: true })
  color?: string;

  @Prop({
    unique: true,
    sparse: true,
    trim: true
  })
  barcode?: string;

  @Prop({ default: 0, min: 0 })
  soldCount: number;

  @Prop({ default: false, select: false })
  isDeleted: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// index للبحث السريع بالاسم
ProductSchema.index({ name: "text" });
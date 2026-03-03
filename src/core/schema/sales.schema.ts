import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type SaleDocument = HydratedDocument<Sale>;

@Schema({ timestamps: true })
export class Sale {

  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Types.ObjectId;

  @Prop({ required: true, min: 1 })
  quantity: number;

  @Prop({ required: true, min: 0 })
  totalPrice: number;

  @Prop({ default: Date.now })
  date: Date;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
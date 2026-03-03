import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Manager {

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);
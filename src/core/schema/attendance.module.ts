import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type AttendanceDocument = Attendance & Document;

@Schema({ timestamps: true })
export class Attendance {

  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  employee: Types.ObjectId;

  @Prop({ required: true })
  date: Date;

  @Prop({ enum: ['present', 'absent'], required: true })
  status: string;

  @Prop({ default: 0 })
  deduction: number;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
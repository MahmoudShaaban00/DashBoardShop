import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  Min,
  IsDateString,
  IsString
} from 'class-validator';
import { Type } from 'class-transformer';


// ✅ إنشاء عملية بيع
export class CreateSaleDto {

  @IsMongoId()
  @IsNotEmpty()
  productId: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  quantity: number;
}


// ✅ الرد على عملية بيع
export class SaleDto {

  @IsString()
  id: string;

  @IsMongoId()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  totalPrice: number;

  date: Date;
}


// ✅ تقرير يومي
export class DailySalesDto {

  @IsDateString()
  date: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  totalSales: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  totalRevenue: number;
}
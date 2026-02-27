import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  MaxLength,
  IsOptional,
  IsMongoId
} from "class-validator";
import { Type } from "class-transformer";

/* ===== CREATE PRODUCT ===== */
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  stock: number;

  @IsString()
  @IsOptional()
  size?: string;

  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  barcode?: string;
}

/* ===== UPDATE PRODUCT ===== */
export class UpdateProductDto {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  name?: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  stock?: number;

  @IsString()
  @IsOptional()
  size?: string;

  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  barcode?: string;
}

/* ===== RESPONSE DTO ===== */
export class ProductResponseDto {
  message: string;
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    size?: string;
    color?: string;
    barcode?: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

/* ===== PARAMS ID DTO ===== */
export class ParamsIdDto {
  @IsMongoId()
  id: string;
}
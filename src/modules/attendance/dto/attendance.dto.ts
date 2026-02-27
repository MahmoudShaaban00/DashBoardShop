import { IsBoolean, IsDateString, IsMongoId, IsOptional } from "class-validator";

// ===== Create Attendance =====
export class CreateAttendanceDto {
  @IsMongoId()
  employee: string;

  @IsDateString()
  date: string;

  @IsBoolean()
  status: boolean; // true = present, false = absent

  @IsOptional()
  deduction?: number; // يحسب في السيرفيس
}

// ===== Update Attendance =====
export class UpdateAttendanceDto {
  @IsOptional()
  @IsMongoId()
  employee?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  deduction?: number;
}

// ===== Param ID =====
export class ParamIdDto {
  @IsMongoId()
  id: string;
}
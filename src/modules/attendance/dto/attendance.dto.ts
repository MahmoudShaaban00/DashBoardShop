import { IsBoolean, IsDateString, IsMongoId, IsOptional } from "class-validator";

// ===== Create Attendance =====
export class CreateAttendanceDto {
  @IsMongoId()
  employee: string;

  @IsDateString()
  date: string;

  @IsEnum(['present', 'absent'])
  status: 'present' | 'absent'; // نفس نوع الموديل

  @IsOptional()
  @IsNumber()
  deduction?: number;
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

import { IsEnum, IsDateString, IsMongoId, IsOptional, IsNumber } from "class-validator";

// ===== Create Attendance =====
export class CreateAttendanceDto {
  @IsMongoId()
  employee: string;

  @IsDateString()
  date: string;

  @IsEnum(['present', 'absent'])
  status: 'present' | 'absent';

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
  @IsEnum(['present', 'absent'])
  status?: 'present' | 'absent';

  @IsOptional()
  @IsNumber()
  deduction?: number;
}

// ===== Param ID =====
export class ParamIdDto {
  @IsMongoId()
  id: string;
}

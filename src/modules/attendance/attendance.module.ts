import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { Attendance, AttendanceSchema } from 'src/core/schema/attendance.module';
import { Employee, EmployeeSchema } from 'src/core/schema/employee.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Attendance.name, schema: AttendanceSchema }, { name: Employee.name, schema: EmployeeSchema },]),],
  controllers: [AttendanceController ],
  providers: [AttendanceService,JwtService],
})
export class AttendanceModule { }
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { Attendance, AttendanceSchema } from '@core/schema/attendance.schema';
import { Employee, EmployeeSchema } from '@core/schema/employee.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attendance.name, schema: AttendanceSchema },
      { name: Employee.name, schema: EmployeeSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT, // لازم موجود في env على Vercel
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AttendanceController],
  providers: [AttendanceService], // ✅ شيل JwtService من هنا
})
export class AttendanceModule {}
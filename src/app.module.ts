import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './modules/employees/employee.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { ProductModule } from './modules/product/product.module';
import { SalesModule } from './modules/sales/sales.module';

@Module({
  imports: [
    AuthModule,
    EmployeesModule,
    AttendanceModule,
    ProductModule,
    SalesModule,
    MongooseModule.forRoot(process.env.MONGO_URI as string),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
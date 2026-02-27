import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { EmployeesModule } from './modules/employees/employee.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { ProductModule } from './modules/product/product.module';
import { SalesModule } from './modules/sales/sales.module';

@Module({
  imports: [AuthModule ,EmployeesModule,AttendanceModule,ProductModule,SalesModule, MongooseModule.forRoot('mongodb+srv://mahmoud:GIzFdn4OpyG3gD3I@cluster0.yhtcrzf.mongodb.net/dashboard?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

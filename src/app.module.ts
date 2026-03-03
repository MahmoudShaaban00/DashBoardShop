import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from '../src/modules/auth/auth.module';
import { AttendanceModule } from '../src/modules/attendance/attendance.module';
import { EmployeesModule } from '../src/modules/employees/employee.module';
import { ProductModule } from '../src/modules/product/product.module';
import { SalesModule } from '../src/modules/sales/sales.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),

    AuthModule,AttendanceModule,EmployeesModule,
    ProductModule,SalesModule
  ],
})
export class AppModule {}
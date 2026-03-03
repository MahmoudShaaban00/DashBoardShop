import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from '@modules/auth/auth.module';
import { AttendanceModule } from '@modules/attendance/attendance.module';
import { EmployeesModule } from '@modules/employees/employee.module';
import { ProductModule } from '@modules/product/product.module';
import { SalesModule } from '@modules/sales/sales.module';

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
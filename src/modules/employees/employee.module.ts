
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'src/core/schema/employee.module';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),],
  controllers: [EmployeesController ],
  providers: [EmployeesService,JwtService],
})
export class EmployeesModule {}
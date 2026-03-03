import { Body, Controller, Delete, Get, Post, Put, Param, UseGuards } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDTO } from './dto/employee.dto';
import { AuthGuard } from '../../core/guards/auth.guard';

@Controller('employees')
@UseGuards(AuthGuard)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  createEmployee(@Body() employee: EmployeeDTO) {
    return this.employeesService.addEmployee(employee);
  }

  @Get()
  getAllEmployees() {
    return this.employeesService.getAllEmployees();
  }

  @Get(':id')
  getEmployee(@Param('id') id: string) {
    return this.employeesService.getEmployee(id);
  }

  @Delete(':id')
  deleteEmployee(@Param('id') id: string) {
    return this.employeesService.deleteEmployee(id);
  }

  @Put(':id')
  updateEmployee(@Param('id') id: string, @Body() employee: EmployeeDTO) {
    return this.employeesService.updateEmployee(id, employee);
  }

  // 🔹 Test endpoint
  @Get('test')
  testConnection() {
    return this.employeesService.testConnection();
  }
}
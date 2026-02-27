import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from 'src/core/schema/employee.module';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel('Employee') private employeeModel: Model<Employee>,) {}

  // 🔹 Insert
  async addEmployee(employee: Employee) {
    await this.employeeModel.create(employee);

    const employees = await this.employeeModel
      .find()
      .select('name email position salary');

    return {
      message: 'Employee added successfully',
      data: employees,
    };
  }

  // 🔹 Get All
  async getAllEmployees() {
    const employees = await this.employeeModel
      .find()
      .select('name email position salary');

    return {
      message: 'Employees fetched successfully',
      data: employees,
    };
  }

  // 🔹 Get One
  async getEmployee(id: string) {
    const employee = await this.employeeModel
      .findById(id)
      .select('name email position salary');

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return {
      message: 'Employee fetched successfully',
      data: employee,
    };
  }

  // 🔹 Update
  async updateEmployee(id: string, employee: Employee) {
    const updated = await this.employeeModel
      .findByIdAndUpdate(id, employee, { new: true })
      .select('name email position salary');

    if (!updated) {
      throw new NotFoundException('Employee not found');
    }

    return {
      message: 'Employee updated successfully',
      data: updated,
    };
  }

  // 🔹 Delete
  async deleteEmployee(id: string) {
    const deleted = await this.employeeModel
      .findByIdAndDelete(id)
      .select('name email position salary');

    if (!deleted) {
      throw new NotFoundException('Employee not found');
    }

    return {
      message: 'Employee deleted successfully',
      data: deleted,
    };
  }
}
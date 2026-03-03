import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Attendance } from '../../core/schema/attendance.schema';
import { CreateAttendanceDto, UpdateAttendanceDto } from './dto/attendance.dto';
import { Employee } from '../../core/schema/employee.schema';

@Injectable()
export class AttendanceService {
constructor(
    @InjectModel(Attendance.name) private attendanceModel: Model<Attendance>,
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
  ) {}
  // ✅ Add Attendance
  async addAttendance(attendance: CreateAttendanceDto) {
    // Optional: حساب خصم تلقائي لو absent
    let deduction = 0;
    if (!attendance.status) {
      const employee = await this.employeeModel.findById(attendance.employee);
      if (!employee) throw new NotFoundException('Employee not found');
      deduction = employee.salary / 30; // خصم يوم واحد
      // تحديث salary
      employee.salary = employee.salary - deduction;
      await employee.save();
    }

    const newAttendance = await this.attendanceModel.create({
      ...attendance,
      employee: new Types.ObjectId(attendance.employee),
      deduction,
      status: attendance.status ? 'present' : 'absent',
      date: new Date(attendance.date),
    });

    return { message: 'Attendance added', data: newAttendance };
  }

  // ✅ Get All
  async getAllAttendances() {
    const records = await this.attendanceModel.find().populate('employee', 'name email position salary');
    return { message: 'All attendances fetched', count: records.length, data: records };
  }

  // ✅ Get One
  async getAttendanceById(id: string) {
    const record = await this.attendanceModel.findById(id).populate('employee', 'name email position salary');
    if (!record) throw new NotFoundException('Attendance not found');
    return { message: 'Attendance fetched', data: record };
  }

  // ✅ Update
  async updateAttendance(id: string, attendance: UpdateAttendanceDto) {
    const updateData: any = { ...attendance };

    if (attendance.employee) updateData.employee = new Types.ObjectId(attendance.employee);
    if (attendance.date) updateData.date = new Date(attendance.date);
    if (attendance.status !== undefined) updateData.status = attendance.status ? 'present' : 'absent';

    const updated = await this.attendanceModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) throw new NotFoundException('Attendance not found');

    return { message: 'Attendance updated', data: updated };
  }

  // ✅ Delete
  async deleteAttendance(id: string) {
    const deleted = await this.attendanceModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Attendance not found');
    return { message: 'Attendance deleted', data: deleted };
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Attendance, AttendanceDocument } from '../../core/schema/attendance.schema';
import { CreateAttendanceDto, UpdateAttendanceDto } from '../attendance/dto/attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel(Attendance.name) private attendanceModel: Model<AttendanceDocument>,
  ) {}

  async getAll(): Promise<Attendance[]> {
    return this.attendanceModel.find().populate('employee', 'name email salary').exec();
  }

  async getById(id: string): Promise<Attendance> {
    const attendance = await this.attendanceModel.findById(id).populate('employee', 'name email salary');
    if (!attendance) throw new NotFoundException('Attendance not found');
    return attendance;
  }

  async create(dto: CreateAttendanceDto): Promise<Attendance> {
    const attendance = new this.attendanceModel({
      employee: new Types.ObjectId(dto.employee),
      date: dto.date,
      status: dto.status,
      deduction: dto.deduction ?? 0,
    });
    return attendance.save();
  }

  async update(id: string, dto: UpdateAttendanceDto): Promise<Attendance> {
    const attendance = await this.attendanceModel.findByIdAndUpdate(
      id,
      {
        ...dto,
        ...(dto.employee ? { employee: new Types.ObjectId(dto.employee) } : {}),
      },
      { new: true },
    );
    if (!attendance) throw new NotFoundException('Attendance not found');
    return attendance;
  }

  async delete(id: string): Promise<void> {
    const result = await this.attendanceModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Attendance not found');
  }
}
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto, UpdateAttendanceDto, ParamIdDto } from '../attendance/dto/attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  async getAll() {
    const data = await this.attendanceService.getAll();
    return { message: 'Attendance list fetched', data };
  }

  @Get(':id')
  async getById(@Param() params: ParamIdDto) {
    const data = await this.attendanceService.getById(params.id);
    return { message: 'Attendance fetched', data };
  }

  @Post()
  async create(@Body() dto: CreateAttendanceDto) {
    const data = await this.attendanceService.create(dto);
    return { message: 'Attendance added', data };
  }

  @Put(':id')
  async update(@Param() params: ParamIdDto, @Body() dto: UpdateAttendanceDto) {
    const data = await this.attendanceService.update(params.id, dto);
    return { message: 'Attendance updated', data };
  }

  @Delete(':id')
  async delete(@Param() params: ParamIdDto) {
    await this.attendanceService.delete(params.id);
    return { message: 'Attendance deleted' };
  }
}
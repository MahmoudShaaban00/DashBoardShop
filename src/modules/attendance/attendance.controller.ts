import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto, UpdateAttendanceDto, ParamIdDto } from './dto/attendance.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('attendance')
@UseGuards(AuthGuard) // تأكد من أن المستخدم مصرح له
export class AttendanceController {
    constructor(private readonly attendanceService: AttendanceService) {}

    @Post()
    async addAttendance(@Body() attendance: CreateAttendanceDto) {
        return this.attendanceService.addAttendance(attendance);
    }

    @Get()
    async getAllAttendance() {
        return this.attendanceService.getAllAttendances();
    }

    @Get(':id')
    async getAttendance(@Param() param: ParamIdDto) {
        return this.attendanceService.getAttendanceById(param.id);
    }

    @Put(':id')
    async updateAttendance(
        @Param() param: ParamIdDto,
        @Body() attendance: UpdateAttendanceDto
    ) {
        return this.attendanceService.updateAttendance(param.id, attendance);
    }

    @Delete(':id')
    async deleteAttendance(@Param() param: ParamIdDto) {
        return this.attendanceService.deleteAttendance(param.id);
    }
}
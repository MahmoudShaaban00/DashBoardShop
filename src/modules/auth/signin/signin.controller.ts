import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { CreateManagerDto, SigninDto } from './dto/auth.dto';

@Controller('signin')
export class SigninController {

    constructor(private readonly signinService: SigninService){}

    @Post()
    async signin(@Body() body:SigninDto){
        return await this.signinService.signin(body);
    }

    @Post('create')
    async createManager(@Body() body: CreateManagerDto){
        return await this.signinService.createManager(body);
    }
}
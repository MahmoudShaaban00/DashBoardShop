// src/signin/signin.service.ts

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import  bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Manager } from '../../../core/schema/manager.schema';
import { SigninDto } from './dto/auth.dto';


@Injectable()
export class SigninService {

  constructor(
    @InjectModel(Manager.name)
    private readonly managerModel: Model<Manager>,
    private readonly jwtService: JwtService,
  ) {}

  // ✅ Register
  async createManager(body: SigninDto) {

    const existingManager = await this.managerModel.findOne({ email: body.email });

    if (existingManager) {
      throw new HttpException("Email already exists", HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const manager = await this.managerModel.create({
      email: body.email,
      password: hashedPassword,
    });

    return {
      message: "Manager created successfully",
      data: manager,
    };
  }

  // ✅ Login
  async signin(body: SigninDto) {

    const manager = await this.managerModel.findOne({ email: body.email });

    if (!manager) {
      throw new HttpException("Invalid email or password", HttpStatus.UNAUTHORIZED);
    }

    const isMatch = await bcrypt.compare(body.password, manager.password);

    if (!isMatch) {
      throw new HttpException("Invalid email or password", HttpStatus.UNAUTHORIZED);
    }

    const payload = {
      id: manager._id,
      email: manager.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      message: "Manager signed in successfully",
      access_token: token,
    };
  }
}
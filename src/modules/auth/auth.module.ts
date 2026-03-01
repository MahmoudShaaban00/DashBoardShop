import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { SigninService } from '../auth/signin/signin.service';
import { SigninController } from '../auth/signin/signin.controller';
import { Manager, ManagerSchema } from "../../core/schema/manager.module";
import { config } from 'dotenv';

config(); // تحميل متغيرات البيئة

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Manager.name, schema: ManagerSchema }]),
    JwtModule.register({
      secret: process.env.JWT,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [SigninController],
  providers: [SigninService],
  exports: [SigninService, JwtModule],
})
export class AuthModule {}
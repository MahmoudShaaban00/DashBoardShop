import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { SigninService } from '../auth/signin/signin.service';
import { SigninController } from '../auth/signin/signin.controller';
import { Manager, ManagerSchema } from "../../core/schema/manager.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Manager.name, schema: ManagerSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT, // 👈 الاسم الموحد
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [SigninController],
  providers: [SigninService],
  exports: [JwtModule], // 👈 أهم حاجة عشان باقي الموديولز تستخدمه
})
export class AuthModule {}
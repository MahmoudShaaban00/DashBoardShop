import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import  express from 'express';
import  serverless from 'serverless-http';

const expressApp = express();
const adapter = new ExpressAdapter(expressApp);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, adapter);

  // تفعيل CORS عشان الـ frontend يقدر يطلب من الـ backend
app.enableCors({
  origin: ['http://localhost:3000', 'https://your-frontend.vercel.app'], // رابط الـ frontend الحقيقي
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // مهم ل preflight
  allowedHeaders: '*', // يسمح بأي header
  credentials: true,
});

  await app.init();
}

bootstrap();

export const handler = serverless(expressApp);

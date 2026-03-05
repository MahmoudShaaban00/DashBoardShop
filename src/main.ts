import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const expressApp = express();

// CORS هنا مهم جدا
expressApp.use(
  cors({
    origin: "*",
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE","OPTIONS"],
    allowedHeaders: "*",
  })
);

const adapter = new ExpressAdapter(expressApp);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, adapter);
  await app.init();
}

bootstrap();

export const handler = serverless(expressApp);
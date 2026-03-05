import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';
import cors from 'cors';

const server = express();

// تفعيل CORS
server.use(
  cors({
    origin: "*", // يسمح لأي frontend
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: "*",
  })
);

let cachedApp: any;

async function bootstrap() {
  if (!cachedApp) {
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
    );

    await nestApp.init();
    cachedApp = server;
  }

  return cachedApp;
}

export default async function handler(req: Request, res: Response) {
  const app = await bootstrap();
  return app(req, res);
}

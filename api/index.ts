import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';
import serverless from 'serverless-http';

const server = express();
let cachedApp: any;

async function bootstrap() {
  if (!cachedApp) {
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server)
    );

    // تفعيل CORS من داخل NestJS
    nestApp.enableCors({
      origin: ["http://localhost:3000", "https://YOUR_FRONTEND_URL.vercel.app"], 
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      allowedHeaders: "*",
      credentials: true,
    });

    await nestApp.init();
    cachedApp = server;
  }

  return cachedApp;
}

// handler جاهز لـ Vercel
export default serverless(server);

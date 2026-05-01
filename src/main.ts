import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();
let cachedApp: any;

async function createApp() {
  if (!cachedApp) {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
    );

    app.enableCors({
      origin: '*',
      methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      allowedHeaders: '*',
    });

    await app.init();
    cachedApp = server;
  }
  return cachedApp;
}

export default async function handler(req: any, res: any) {
  const app = await createApp();
  return app(req, res);
}
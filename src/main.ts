import { NestFactory } from '@nestjs/core';
import { App } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 3009;
  const app = await NestFactory.create(App);

  const config = new DocumentBuilder()
    .setTitle('Token For Ever')
    .setDescription('docs for Token For Ever')
    .setVersion('0.0.1')
    .addTag('TFE')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs/api', app, document);

  app.enableCors({ origin: process.env.ORIGIN, credentials: false });

  await app.listen(PORT, () => {
    console.log('started on ', PORT);
  });
}

start();

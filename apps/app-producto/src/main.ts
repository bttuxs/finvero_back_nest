import { NestFactory } from '@nestjs/core';
import { AppProductoModule } from './app-producto.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerService } from '@app/configs/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppProductoModule, {
    logger: new LoggerService(),
  });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  const port = process.env.PORT_APP_WS_PRODUCTO || '3001';
  console.log('****---PORT: ' + port);
  await app.listen(port);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppProductoModule } from './app-producto.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerService } from '@app/configs/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppProductoModule, {
    logger: new LoggerService(),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();

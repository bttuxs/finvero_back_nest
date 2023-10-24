import { NestFactory } from '@nestjs/core';
import { AppOrdenModule } from './app-orden.module';
import { LoggerService } from '@app/configs/logger.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppOrdenModule, {
    logger: new LoggerService(),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3002);
}
bootstrap();

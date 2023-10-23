import { NestFactory } from '@nestjs/core';
import { AppUsuarioModule } from './app-usuario.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerService } from '@app/configs/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppUsuarioModule, {
    logger: new LoggerService(),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

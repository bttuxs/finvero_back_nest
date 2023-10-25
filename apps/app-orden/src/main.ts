import { NestFactory } from '@nestjs/core';
import { AppOrdenModule } from './app-orden.module';
import { LoggerService } from '@app/configs/logger.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppOrdenModule, {
    logger: new LoggerService(),
  });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  const port = process.env.PORT_APP_WS_ORDEN || '3002';
  console.log('****---PORT: ' + port);
  await app.listen(port);
}
bootstrap();

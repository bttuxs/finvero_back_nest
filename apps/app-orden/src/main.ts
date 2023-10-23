import { NestFactory } from '@nestjs/core';
import { AppOrdenModule } from './app-orden.module';

async function bootstrap() {
  const app = await NestFactory.create(AppOrdenModule);
  await app.listen(3000);
}
bootstrap();

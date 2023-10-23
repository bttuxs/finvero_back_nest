import { NestFactory } from '@nestjs/core';
import { AppProductoModule } from './app-producto.module';

async function bootstrap() {
  const app = await NestFactory.create(AppProductoModule);
  await app.listen(3000);
}
bootstrap();

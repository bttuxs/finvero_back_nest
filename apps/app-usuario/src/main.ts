import { NestFactory } from '@nestjs/core';
import { AppUsuarioModule } from './app-usuario.module';

async function bootstrap() {
  const app = await NestFactory.create(AppUsuarioModule);
  await app.listen(3000);
}
bootstrap();

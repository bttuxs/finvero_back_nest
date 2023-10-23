import { Module } from '@nestjs/common';
import { UsuarioModule } from './app-usuario/usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppUsuarioModule {}

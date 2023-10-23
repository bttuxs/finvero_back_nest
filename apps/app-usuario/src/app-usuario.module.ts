import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app-usuario/usuario/user.module';
import { configMysql } from '@app/configs';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
    }),
    UserModule,
    configMysql,
  ],
  controllers: [],
  providers: [],
})
export class AppUsuarioModule {}

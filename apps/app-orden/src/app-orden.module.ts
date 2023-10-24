import { Module } from '@nestjs/common';
import { OrdenModule } from './app-orden/orden/orden.module';
import { ConfigModule } from '@nestjs/config';
import { configMysql } from '@app/configs';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
    }),
    configMysql,
    OrdenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppOrdenModule {}

import { Module } from '@nestjs/common';
import { ProductoModule } from './app-producto/producto/producto.module';
import { configMysql } from '@app/configs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
    }),
    ProductoModule,
    configMysql,
  ],
  controllers: [],
  providers: [],
})
export class AppProductoModule {}

import { Module } from '@nestjs/common';
import { OrdenModule } from './app-orden/orden/orden.module';
import { ConfigModule } from '@nestjs/config';
import { configMysql } from '@app/configs';
import { OrdenDetalleModule } from './app-orden/orden-detalle/orden-detalle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
    }),
    configMysql,
    OrdenModule,
    OrdenDetalleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppOrdenModule {}

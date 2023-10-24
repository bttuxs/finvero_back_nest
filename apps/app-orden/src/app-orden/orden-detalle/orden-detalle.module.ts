import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ordenDetalleEntity } from './orden-detalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ordenDetalleEntity])],
})
export class OrdenDetalleModule {}

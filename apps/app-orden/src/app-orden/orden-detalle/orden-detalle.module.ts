import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ordenDetalleEntity } from './orden-detalle.entity';
import { OrdenDetalleController } from './orden-detalle.controller';
import { OrdenDetalleService } from './orden-detalle.service';

@Module({
  imports: [TypeOrmModule.forFeature([ordenDetalleEntity])],
  controllers: [OrdenDetalleController],
  providers: [OrdenDetalleService],
})
export class OrdenDetalleModule {}

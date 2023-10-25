import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ordenDetalleEntity } from './orden-detalle.entity';
import { OrdenDetalleController } from './orden-detalle.controller';
import { OrdenDetalleService } from './orden-detalle.service';
import { OrdenService } from '../orden/orden.service';
import { ordenEntity } from '../orden/orden.entity';
import { productoEntity } from 'apps/app-producto/src/app-producto/producto/producto.entity';
import { ProductoService } from 'apps/app-producto/src/app-producto/producto/producto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ordenDetalleEntity, ordenEntity, productoEntity]),
  ],
  controllers: [OrdenDetalleController],
  providers: [OrdenDetalleService, OrdenService, ProductoService],
})
export class OrdenDetalleModule {}

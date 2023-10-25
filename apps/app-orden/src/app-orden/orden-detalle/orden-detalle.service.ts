import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { ordenDetalleEntity } from './orden-detalle.entity';
import {
  ordenDetalleAddDTO,
  ordenDetalleDelDTO,
  ordenDetalleIdDTO,
  ordenFechasDTO,
} from './orden-detalle.dto';
import { ordenEntity } from '../orden/orden.entity';
import { productoEntity } from 'apps/app-producto/src/app-producto/producto/producto.entity';
import { ordenUserDTO } from '../orden/orden.dto';

@Injectable()
export class OrdenDetalleService {
  constructor(
    @InjectRepository(ordenDetalleEntity)
    private ordenRepository: Repository<ordenDetalleEntity>,
  ) {}
  getOrdenDetalle(
    ordenDetalle: ordenDetalleIdDTO,
  ): Promise<ordenDetalleEntity[]> {
    return this.ordenRepository.find({
      where: { ...ordenDetalle },
    });
  }
  addDetalleOrden(detalle: ordenDetalleAddDTO): Promise<InsertResult> {
    return this.ordenRepository.upsert(detalle, ['orden', 'id_producto']);
  }
  delDetalleOrden(detalle: ordenDetalleDelDTO): Promise<DeleteResult> {
    return this.ordenRepository
      .createQueryBuilder()
      .delete()
      .where('orden = :orden', { orden: detalle.orden })
      .andWhere('id_producto = :id_producto', {
        id_producto: detalle.id_producto,
      })
      .execute();
  }
  getVentas(fechas: ordenFechasDTO) {
    try {
      return this.ordenRepository
        .createQueryBuilder('od')
        .select('id_producto', 'producto')
        .addSelect('precio', 'precio')
        .addSelect('SUM(cantidad)', 'cantidad')
        .where((sq) => {
          const subQuery = sq
            .subQuery()
            .select('o.orden')
            .from(ordenEntity, 'o')
            .where('id_usuario = :id_usuario')
            .andWhere('createdAt > :fecha_inicio')
            .andWhere('createdAt <= :fecha_termino')
            .getQuery();
          return 'od.orden_id IN ' + subQuery;
        })
        .setParameter('id_usuario', fechas.id_usuario)
        .setParameter('fecha_inicio', fechas.fecha_inicio)
        .setParameter('fecha_termino', fechas.fecha_termino)
        .groupBy('id_producto')
        .addGroupBy('precio')
        .getRawMany();
    } catch (e) {
      console.log('ocurrio un error');
      console.log(e);
      console.log(JSON.stringify(e));
    }
  }
}

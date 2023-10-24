import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { ordenDetalleEntity } from './orden-detalle.entity';
import {
  ordenDetalleAddDTO,
  ordenDetalleDelDTO,
  ordenDetalleIdDTO,
} from './orden-detalle.dto';

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
}

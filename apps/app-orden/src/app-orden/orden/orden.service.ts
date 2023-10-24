import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ordenEntity } from './orden.entity';
import { ordenUserDTO } from './orden.dto';
import { DbException } from '@app/exceptions';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(ordenEntity)
    private ordenRepository: Repository<ordenEntity>,
  ) {}
  async createOrden(orden: ordenUserDTO): Promise<ordenEntity> {
    try {
      return this.ordenRepository.save(orden);
    } catch (e) {
      DbException(e, ordenEntity.toString());
    }
  }
  async getOrdenUser(orden: ordenUserDTO): Promise<ordenEntity[]> {
    try {
      return await this.ordenRepository.find({
        where: { ...orden },
      });
    } catch (e) {
      DbException(e, ordenEntity.toString());
    }
  }
}

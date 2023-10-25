import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productoEntity } from './producto.entity';
import {
  productoCreateDTO,
  productoUserDTO,
  productoValidDTO,
} from './producto.dto';
import { DbException } from '@app/exceptions';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(productoEntity)
    private productoRepository: Repository<productoEntity>,
  ) {}
  getProductos(): Promise<productoEntity[]> {
    try {
      return this.productoRepository.find();
    } catch (e) {
      DbException(e, productoEntity.toString());
    }
  }
  getProductosUser(productoUser: productoUserDTO): Promise<productoEntity[]> {
    try {
      return this.productoRepository.find({ where: { ...productoUser } });
    } catch (e) {
      DbException(e, productoEntity.toString());
    }
  }
  async createProducto(producto: productoCreateDTO): Promise<productoEntity> {
    try {
      return await this.productoRepository.save(producto);
    } catch (e) {
      DbException(e, productoEntity.toString());
    }
  }
  async getProductosUserByname(
    producto: productoValidDTO,
  ): Promise<productoEntity> {
    try {
      return await this.productoRepository.findOne({ where: { ...producto } });
    } catch (e) {
      DbException(e, productoEntity.toString());
    }
  }
}

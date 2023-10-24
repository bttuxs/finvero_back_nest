import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdenDetalleService } from './orden-detalle.service';
import {
  ordenDetalleAddDTO,
  ordenDetalleDelDTO,
  ordenDetalleIdDTO,
} from './orden-detalle.dto';
import { DbException } from '@app/exceptions';
import { ordenDetalleEntity } from './orden-detalle.entity';
import { DeleteResult, InsertResult } from 'typeorm';

@Controller('orden/detalle')
export class OrdenDetalleController {
  constructor(private ordenDetalleService: OrdenDetalleService) {}

  @Get(':orden_id')
  async getItemsOrden(
    @Param() orden: ordenDetalleIdDTO,
  ): Promise<ordenDetalleEntity[]> {
    try {
      return await this.ordenDetalleService.getOrdenDetalle(orden);
    } catch (e) {
      DbException(e, ordenDetalleEntity.toString());
    }
  }

  @Post('item')
  async addItemOrden(@Body() item: ordenDetalleAddDTO): Promise<InsertResult> {
    try {
      return await this.ordenDetalleService.addDetalleOrden(item);
    } catch (e) {
      DbException(e, ordenDetalleEntity.toString());
    }
  }
  @Delete('item')
  async deleteItemOrden(
    @Body() item: ordenDetalleDelDTO,
  ): Promise<DeleteResult> {
    try {
      return await this.ordenDetalleService.delDetalleOrden(item);
    } catch (e) {
      DbException(e, ordenDetalleEntity.toString());
    }
  }
}

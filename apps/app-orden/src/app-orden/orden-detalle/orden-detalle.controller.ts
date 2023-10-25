import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdenDetalleService } from './orden-detalle.service';
import {
  ordenDetalleAddDTO,
  ordenDetalleAddItemsDTO,
  ordenDetalleDelDTO,
  ordenDetalleIdDTO,
} from './orden-detalle.dto';
import { DbException } from '@app/exceptions';
import { ordenDetalleEntity } from './orden-detalle.entity';
import { DeleteResult, InsertResult } from 'typeorm';
import { OrdenService } from '../orden/orden.service';
import { ordenUserDTO } from '../orden/orden.dto';
import { ProductoService } from 'apps/app-producto/src/app-producto/producto/producto.service';
import {
  productoCreateDTO,
  productoValidDTO,
} from 'apps/app-producto/src/app-producto/producto/producto.dto';
import { limpiarNombreProducto } from '@app/utils';

@Controller('orden/detalle')
export class OrdenDetalleController {
  constructor(
    private ordenDetalleService: OrdenDetalleService,
    private orderService: OrdenService,
    private productoService: ProductoService,
  ) {}

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

  @Post('items/:id_usuario')
  async addItemsOrden(
    @Body() items: ordenDetalleAddItemsDTO[],
    @Param() user: ordenUserDTO,
  ): Promise<ordenDetalleEntity[]> {
    const response = [];

    try {
      const numOrder = await this.orderService.createOrden(user);
      const orden_id = numOrder.orden;
      for (let idx = 0; idx < items.length; idx++) {
        try {
          const nombreProducto = limpiarNombreProducto(items[idx].producto);
          const productoValidar: productoValidDTO = {
            id_usuario: user.id_usuario,
            producto_nombre: nombreProducto,
          };

          let productoExite =
            await this.productoService.getProductosUserByname(productoValidar);
          console.log(productoExite);
          if (!productoExite) {
            const userProducto: productoCreateDTO = {
              id_usuario: user.id_usuario,
              producto_description: items[idx].producto,
              producto_nombre: nombreProducto,
            };

            productoExite =
              await this.productoService.createProducto(userProducto);
          }

          const item: ordenDetalleAddDTO = {
            orden_id,
            id_producto: productoExite.id,
            cantidad: items[idx].cantidad,
            precio: items[idx].precio,
          };
          const result = await this.ordenDetalleService.addDetalleOrden(item);
          response.push(result);

        } catch (e) {
          DbException(e, ordenDetalleEntity.toString());
        }
      }
      return await this.ordenDetalleService.getOrdenDetalle({ orden_id });
    } catch (e) {
      DbException(e, ordenDetalleEntity.toString());
      console.log(e);
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

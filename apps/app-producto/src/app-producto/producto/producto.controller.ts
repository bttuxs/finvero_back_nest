import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import {
  productoCreateDTO,
  productoUserDTO,
  productoValidDTO,
} from './producto.dto';
import { limpiarNombreProducto } from '@app/utils/string.util';

@Controller('producto')
export class ProductoController {
  constructor(private productoService: ProductoService) {}

  @Get('user/:id_usuario')
  async getProductosUser(@Param() productoUser: productoUserDTO) {
    return await this.productoService.getProductosUser(productoUser);
  }

  @Post()
  async createUser(@Body() producto: productoValidDTO) {
    const productoFull: productoCreateDTO = {
      ...producto,
      producto_nombre: limpiarNombreProducto(producto.producto_nombre),
      producto_description: producto.producto_nombre,
    };
    return await this.productoService.createProducto(productoFull);
  }
}

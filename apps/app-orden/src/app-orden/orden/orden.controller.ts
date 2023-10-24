import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { ordenUserDTO } from './orden.dto';

@Controller('orden')
export class OrdenController {
  constructor(private ordenService: OrdenService) {}

  @Post()
  async generateOrder(@Body() orderUser: ordenUserDTO) {
    return await this.ordenService.createOrden(orderUser);
  }

  @Get('user/:id_usuario')
  async getOrderUser(@Param() orden: ordenUserDTO) {
    return await this.ordenService.getOrdenUser(orden);
  }
}

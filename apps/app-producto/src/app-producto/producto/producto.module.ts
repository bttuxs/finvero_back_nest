import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productoEntity } from './producto.entity';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([productoEntity])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}

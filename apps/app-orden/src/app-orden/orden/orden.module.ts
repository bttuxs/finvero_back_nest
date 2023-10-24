import { Module } from '@nestjs/common';
import { ordenEntity } from './orden.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ordenEntity])],
})
export class OrdenModule {}

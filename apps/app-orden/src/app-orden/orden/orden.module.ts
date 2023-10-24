import { Module } from '@nestjs/common';
import { ordenEntity } from './orden.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';

@Module({
  imports: [TypeOrmModule.forFeature([ordenEntity])],
  controllers: [OrdenController],
  providers: [OrdenService],
})
export class OrdenModule {}

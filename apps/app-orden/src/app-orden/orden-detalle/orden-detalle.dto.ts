import { Transform } from 'class-transformer';
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ordenDetalleDTO {
  @IsNumber()
  id: number;
  @IsNotEmpty()
  @IsString()
  orden: string;
  @IsNumber()
  @IsNotEmpty()
  id_producto: number;
  @IsNumber()
  @IsNotEmpty()
  cantidad: number;
  @IsNumber()
  @IsNotEmpty()
  precio: number;
  @IsDateString()
  createdAt: Date;
}

export class ordenDetalleAddDTO {
  @IsNotEmpty()
  @IsString()
  orden_id: string;
  @IsNumber()
  @IsNotEmpty()
  id_producto: number;
  @IsNumber()
  @IsNotEmpty()
  cantidad: number;
  @IsNumber()
  @IsNotEmpty()
  precio: number;
}

export class ordenDetalleAddItemsDTO {
  @IsNotEmpty()
  @IsString()
  producto: string;
  @IsNumber()
  @IsNotEmpty()
  cantidad: number;
  @IsNumber()
  @IsNotEmpty()
  precio: number;
}

export class ordenDetalleDelDTO {
  @IsNotEmpty()
  @IsString()
  orden: string;
  @IsNumber()
  @IsNotEmpty()
  id_producto: number;
}

export class ordenDetalleIdDTO {
  @IsNotEmpty()
  @IsString()
  orden_id: string;
}
export class ordenFechasDTO {
  @IsNotEmpty()
  @IsString()
  id_usuario: number;

  @IsNotEmpty()
  @IsDateString()
  fecha_inicio: Date;

  @IsDateString()
  @IsNotEmpty()
  fecha_termino: Date;
}

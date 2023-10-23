import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class productoDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  id_usuario: number;

  @IsNotEmpty()
  @IsString()
  producto_nombre: string;

  @IsNotEmpty()
  @IsString()
  producto_description: string;

  @IsDateString()
  createdAt: Date;
}

export class productoCreateDTO {
  @IsNumber()
  @IsNotEmpty()
  id_usuario: number;

  @IsNotEmpty()
  @IsString()
  producto_description: string;

  @IsNotEmpty()
  @IsString()
  producto_nombre: string;
}

export class productoValidDTO {
  @IsNumber()
  @IsNotEmpty()
  id_usuario: number;

  @IsNotEmpty()
  @IsString()
  producto_nombre: string;
}

export class productoUserDTO {
  @IsNotEmpty()
  id_usuario: number;
}

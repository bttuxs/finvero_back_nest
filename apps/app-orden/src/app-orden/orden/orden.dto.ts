import { Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ordenDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id_usuario: number;

  @IsNotEmpty()
  @IsString()
  orden: string;

  @IsDateString()
  createdAt: Date;
}

export class ordenUserDTO {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id_usuario: number;
}

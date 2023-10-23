import { IsEmail, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  id: number;

  @IsDateString()
  createdAt: Date;
}

export class UserCreateDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  nombre: string;
}

export class UserValidDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

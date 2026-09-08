import { IsEmail, IsNotEmpty, IsString, IsDate, MinDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDate()
  @MinDate(new Date('1900-01-01'))
  @Type(() => Date)
  birthDate: Date;

  @IsNotEmpty()
  @IsString()
  role: string;
}
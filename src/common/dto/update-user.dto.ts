import { IsEmail, IsString, IsDate, MinDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsDate()
  @MinDate(new Date('1900-01-01'))
  @Type(() => Date)
  birthDate?: Date;

  @IsString()
  role?: string;
}
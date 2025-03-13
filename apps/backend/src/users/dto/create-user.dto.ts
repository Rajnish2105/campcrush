import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  course: string;

  @IsString()
  class: string;

  @IsNumber()
  roll_number: number;

  @IsNumber()
  year: number;

  @IsArray()
  @IsString({ each: true })
  hobbies: string[];
}

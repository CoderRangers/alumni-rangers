import { IsArray, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { PoeType } from 'src/poe/models/poe.type';

export class CreateInternDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstname: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastname: string;

  @IsString()
  @MaxLength(30)
  readonly gender: string;

  @IsArray()
  readonly emails: string[];

  @IsString()
  @MaxLength(15)
  readonly phone: string;

  @IsString()
  @MaxLength(30)
  readonly job: string;

  @IsString()
  @MaxLength(30)
  readonly company: string;

  readonly poe: PoeType;
}

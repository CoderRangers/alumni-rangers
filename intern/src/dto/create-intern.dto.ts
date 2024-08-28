import { IsArray, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CompanyType } from 'src/models/company.type';
import { PoeType } from 'src/models/poe.type';

export class CreateInternDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstname: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastname: string;

  @IsString({ message: 'is not a string' })
  @MaxLength(30)
  readonly gender: string;

  @IsArray()
  readonly emails: string[];

  @IsString()
  @MaxLength(15)
  readonly phone: string;

  @IsString()
  @MaxLength(30)
  readonly occupation: string;

  readonly company: CompanyType;

  readonly poe: PoeType;
}

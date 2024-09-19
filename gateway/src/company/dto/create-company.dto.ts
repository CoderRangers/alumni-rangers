import { CompanyRating } from 'src/company-feedback/models/company-rating.type';
import { CompanyCategory } from '../models/company.type';
import {
  IsOptional,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsEnum,
  IsNotEmptyObject,
} from 'class-validator';

export class CreateCompanyDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  readonly id?: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmptyObject()
  @IsEnum(CompanyCategory)
  readonly type: CompanyCategory;

  @IsNotEmptyObject()
  @IsEnum(CompanyCategory)
  readonly medianRating: CompanyRating;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  readonly logo?: string;
}

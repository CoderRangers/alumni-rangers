import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';
import { CompanyRating } from '../models/company-rating.type';
import { CompanyType } from '../models/company.type';
import { SalaryFormat } from '../models/salary-format.type';

export class CreateCompanyFeedbackDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  readonly id: string;

  @IsNotEmptyObject()
  readonly company: CompanyType;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly feedbackTitle: string;

  @IsNotEmptyObject()
  @IsEnum(CompanyRating)
  readonly rating: CompanyRating;

  @IsString()
  @MaxLength(2000) // Arbitrary limit to 2000 characters, update value after some testing
  @IsNotEmpty()
  readonly feedbackText: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly jobTitle: string;

  @IsNotEmptyObject()
  @IsDate()
  readonly jobStartDate: Date;

  @IsNotEmptyObject()
  @IsDate()
  readonly jobEndDate: Date;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly salaryLow?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly salaryHigh?: number;

  @IsOptional()
  @IsEnum(SalaryFormat)
  readonly salaryFormat?: SalaryFormat;

  @IsNotEmptyObject()
  @IsDate()
  readonly postedAt: Date;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly lastname: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly firstname: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly internId: string;
}

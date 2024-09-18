import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyFeedbackDto } from './create-company-feedback.dto';
import { IsString, MaxLength } from 'class-validator';

export class UpdateCompanyFeedbackDto extends PartialType(
  CreateCompanyFeedbackDto,
) {
  @IsString()
  @MaxLength(50)
  id: string;
}

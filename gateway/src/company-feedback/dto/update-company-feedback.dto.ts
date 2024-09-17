import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyFeedbackDto } from './create-company-feedback.dto';

export class UpdateCompanyFeedbackDto extends PartialType(
  CreateCompanyFeedbackDto,
) {
  id: number;
}

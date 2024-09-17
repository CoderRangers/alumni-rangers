import { Injectable } from '@nestjs/common';
import { CreateCompanyFeedbackDto } from './dto/create-company-feedback.dto';
import { UpdateCompanyFeedbackDto } from './dto/update-company-feedback.dto';

@Injectable()
export class CompanyFeedbackService {
  create(createCompanyFeedbackDto: CreateCompanyFeedbackDto) {
    return 'This action adds a new companyFeedback';
  }

  findAll() {
    return `This action returns all companyFeedback`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyFeedback`;
  }

  update(id: number, updateCompanyFeedbackDto: UpdateCompanyFeedbackDto) {
    return `This action updates a #${id} companyFeedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyFeedback`;
  }
}

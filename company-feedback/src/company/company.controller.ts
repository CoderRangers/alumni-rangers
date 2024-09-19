import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';
import { MessagePattern } from '@nestjs/microservices';
import { CompanyType } from 'src/models/company.type';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @MessagePattern({ cmd: 'findAllCompany' })
  async findAll(): Promise<CompanyType[]> {
    const feedbackData = await this.companyService.getAllCompanies();
    return feedbackData;
  }
}

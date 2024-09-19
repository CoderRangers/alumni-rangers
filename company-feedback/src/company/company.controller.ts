import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';
import { MessagePattern } from '@nestjs/microservices';
import { CompanyType } from 'src/models/company.type';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @MessagePattern({ cmd: 'findAllCompanies' })
  async findAll(): Promise<CompanyType[]> {
    const companyData = await this.companyService.getAllCompanies();
    return companyData;
  }
}

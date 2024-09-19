import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CompanyType } from 'src/models/company.type';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @MessagePattern({ cmd: 'findAllCompanies' })
  async findAll(): Promise<CompanyType[]> {
    const companyData = await this.companyService.getAllCompanies();
    return companyData;
  }
  @MessagePattern({ cmd: 'findOneCompany' })
  async findOne(@Payload() companyId: string): Promise<CompanyType> {
    const oneCompany = await this.companyService.getOnecompany(companyId);
    return oneCompany;
  }
}

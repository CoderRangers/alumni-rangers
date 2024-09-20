import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CompanyType } from 'src/models/company.type';
import { CompanyEntity } from 'src/models/company.entity';

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
  @MessagePattern({ cmd: 'createCompany' })
  newCompany(companyData: CompanyType): Promise<CompanyEntity> {
    return this.companyService.insertCompany(companyData);
  }
  @MessagePattern({ cmd: 'updateCompany' })
  async changeCompany(@Payload() data): Promise<CompanyEntity> {
    const idCompany: string = data.id;
    const updatedData: Partial<CompanyEntity> = data.updateDto;
    return this.companyService.updateCompany(idCompany, updatedData);
  }
  @MessagePattern({ cmd: 'removeCompany' })
  async deleteCompany(@Payload() id: string) {
    return this.companyService.removeCompany(id);
  }
}

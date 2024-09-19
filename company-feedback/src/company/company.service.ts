import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/models/company.entity';
import { CompanyType } from 'src/models/company.type';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private _repository: Repository<CompanyEntity>,
  ) {}

  getAllCompanies(): Promise<CompanyType[]> {
    return this._repository.find();
  }

  getOnecompany(idCompany: string): Promise<CompanyType> {
    return this._repository.findOne({
      where: { id: idCompany },
    });
  }
  async insertCompany(companyData: CompanyType): Promise<CompanyEntity> {
    try {
      const result = await this._repository.insert(companyData);
      const insertedId = result.identifiers[0].id;
      await this._repository.findOne({
        where: { id: insertedId },
      });
      const savedCompany = await this._repository.findOne({
        where: { id: insertedId },
      });
      return savedCompany;
    } catch (error) {
      Logger.log(error);
      Logger.log('on en est là');
    }
  }
}

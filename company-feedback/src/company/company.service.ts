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
  updateCompany(
    idCompany: string,
    updatedData: Partial<CompanyEntity>,
  ): Promise<CompanyEntity> {
    const company = this._repository.findOne({
      where: { id: idCompany },
    });

    if (!company) {
      throw new Error(`Feedback with id ${idCompany} not found`);
    }

    this._repository.update({ id: idCompany }, updatedData);

    return { ...company, ...updatedData };
  }
  removeCompany(idCompany: string): Promise<CompanyEntity> {
    const company = this._repository.findOne({
      where: { id: idCompany },
    });

    this._repository.delete({ id: idCompany });
    // Feedback contains either a promise of the deleted record, or a promise of null
    return company;
  }
}

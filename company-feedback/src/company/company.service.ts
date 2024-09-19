import { Injectable } from '@nestjs/common';
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
}

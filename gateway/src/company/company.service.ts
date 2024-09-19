import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CompanyType } from './models/company.type';

@Injectable()
export class CompanyService {
  constructor(@Inject('COMPANY-FEEDBACK') private _client: ClientProxy) {}

  create(createCompanyDto: CreateCompanyDto): Observable<CreateCompanyDto> {
    const pattern: any = { cmd: 'createCompany' };
    return this._client.send<CreateCompanyDto>(pattern, createCompanyDto);
  }

  findAll(): Observable<Array<CompanyType>> {
    const pattern: any = { cmd: 'findAllCompanies' };
    return this._client.send<Array<CompanyType>>(pattern, {});
  }

  findOne(id: string): Observable<CompanyType> {
    const pattern: any = { cmd: 'findOneCompany' };
    return this._client.send<CompanyType>(pattern, id);
  }

  update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Observable<UpdateCompanyDto> {
    const pattern: any = { cmd: 'updateCompany' };
    const payload: any = { id: id, updateDto: updateCompanyDto };
    return this._client.send<UpdateCompanyDto>(pattern, payload);
  }

  remove(id: string): Observable<CreateCompanyDto> {
    const pattern: any = { cmd: 'removeCompany' };
    return this._client.send<CreateCompanyDto>(pattern, id);
  }
}

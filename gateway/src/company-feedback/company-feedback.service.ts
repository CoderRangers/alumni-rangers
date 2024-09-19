import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyFeedbackDto } from './dto/create-company-feedback.dto';
import { UpdateCompanyFeedbackDto } from './dto/update-company-feedback.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CompanyFeedbackType } from './models/company-feedback.type';

@Injectable()
export class CompanyFeedbackService {
  constructor(@Inject('COMPANY-FEEDBACK') private _client: ClientProxy) {}

  create(
    createCompanyFeedbackDto: CreateCompanyFeedbackDto,
  ): Observable<CreateCompanyFeedbackDto> {
    const pattern: any = { cmd: 'createCompanyFeedback' };
    return this._client.send<CreateCompanyFeedbackDto>(
      pattern,
      createCompanyFeedbackDto,
    );
  }

  findAll(): Observable<Array<CompanyFeedbackType>> {
    const pattern: any = { cmd: 'findAllCompanyFeedback' };
    return this._client.send<Array<CompanyFeedbackType>>(pattern, {});
  }

  findOne(id: string): Observable<CompanyFeedbackType> {
    const pattern: any = { cmd: 'findOneCompanyFeedback' };
    return this._client.send<CompanyFeedbackType>(pattern, id);
  }

  findNext(index: number): Observable<Array<CompanyFeedbackType>> {
    const pattern: any = { cmd: 'findNextCompanyFeedback' };
    return this._client.send<Array<CompanyFeedbackType>>(pattern, index);
  }

  update(
    id: string,
    updateCompanyFeedbackDto: UpdateCompanyFeedbackDto,
  ): Observable<UpdateCompanyFeedbackDto> {
    const pattern: any = { cmd: 'updateCompanyFeedback' };
    const payload: any = { id: id, updateDto: updateCompanyFeedbackDto };
    return this._client.send<UpdateCompanyFeedbackDto>(pattern, payload);
  }

  remove(id: string): Observable<CreateCompanyFeedbackDto> {
    const pattern: any = { cmd: 'removeCompanyFeedback' };
    return this._client.send<CreateCompanyFeedbackDto>(pattern, id);
  }
}

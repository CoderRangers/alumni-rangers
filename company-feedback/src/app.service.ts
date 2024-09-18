import { Injectable } from '@nestjs/common';
import { CompanyFeedbackType } from './models/company-feedback.type';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyFeedbackEntity } from './models/company-feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CompanyFeedbackEntity)
    private _repository: Repository<CompanyFeedbackEntity>,
  ) {}
  getAllFeedback(): Promise<CompanyFeedbackType[]> {
    return this._repository.find();
  }

  getOneFeedback(idFeedback: string): Promise<CompanyFeedbackEntity> {
    return this._repository.findOneBy({ id: idFeedback });
  }
}

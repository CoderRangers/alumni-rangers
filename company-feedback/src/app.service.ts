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
  async getAllFeedback(): Promise<CompanyFeedbackType[]> {
    const feedbacks = await this._repository.find({
      relations: ['company'],
    });

    return feedbacks.map((feedback) => ({
      ...feedback,
      company: feedback.company
        ? {
            id: feedback.company.id,
            name: feedback.company.name,
            type: feedback.company.type,
            medianRating: feedback.company.medianRating,
            logo: feedback.company.logo,
          }
        : null,
    }));
  }

  getOneFeedback(idFeedback: string): Promise<CompanyFeedbackEntity> {
    return this._repository.findOneBy({ id: idFeedback });
  }
}

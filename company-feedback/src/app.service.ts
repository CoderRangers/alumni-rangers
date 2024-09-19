import { Injectable } from '@nestjs/common';
import { CompanyFeedbackType } from './models/company-feedback.type';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyFeedbackEntity } from './models/company-feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CompanyFeedbackEntity) //it works without add companyEntity.... weird !
    private _repository: Repository<CompanyFeedbackEntity>,
  ) {}
  async getAllFeedback(): Promise<CompanyFeedbackType[]> {
    const feedbacks = await this._repository.find({
      relations: ['company'],
    });
    feedbacks.forEach((feedback) => {
      if (!feedback || !feedback.company) {
        throw new Error('Feedback not found or company relation is missing');
      }
    });
    return feedbacks.map((feedback) => ({
      ...feedback,
      company: {
        id: feedback.company.id,
        name: feedback.company.name,
        type: feedback.company.type,
        medianRating: feedback.company.medianRating,
        logo: feedback.company.logo,
      },
    }));
  }

  async getOneFeedback(idFeedback: string): Promise<CompanyFeedbackType> {
    const feedback = await this._repository.findOne({
      where: { id: idFeedback },
      relations: ['company'],
    });

    if (!feedback || !feedback.company) {
      throw new Error('Feedback not found or company relation is missing');
    }

    return {
      ...feedback,
      company: {
        id: feedback.company.id,
        name: feedback.company.name,
        type: feedback.company.type,
        medianRating: feedback.company.medianRating,
        logo: feedback.company.logo,
      },
    };
  }

  // removeFeedback(idFeedback: string): Promise<CompanyFeedbackEntity> {
  //   return this._repository.delete({ id: idFeedback });
  // }
}

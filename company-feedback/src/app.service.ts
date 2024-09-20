import { Injectable, Logger } from '@nestjs/common';
import { CompanyFeedbackType } from './models/company-feedback.type';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyFeedbackEntity } from './models/company-feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  // How many new feedbacks to load when reaching the bottom of an infinite scroll list
  private _nbFeedbacks = 3;

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

  /* Find the next _nbFeedbacks feedbacks, in ante-chronological order, starting from index */
  getNextFeedbacks(index: number): Promise<CompanyFeedbackEntity[]> {
    return this._repository.find({
      order: { jobEndDate: 'DESC' },
      take: this._nbFeedbacks,
      skip: this._nbFeedbacks * index,
    });
  }

  getAllFeedbacksOfOneCompany(
    companyId: string,
  ): Promise<CompanyFeedbackEntity[]> {
    return this._repository.find({
      relations: {
        company: true,
      },
      where: {
        company: { id: companyId },
      },
    });
  }

  removeFeedback(idFeedback: string): Promise<CompanyFeedbackEntity> {
    const feedback = this._repository.findOne({
      where: { id: idFeedback },
    });

    this._repository.delete({ id: idFeedback });
    // Feedback contains either a promise of the deleted record, or a promise of null
    return feedback;
  }

  updateFeedback(
    idFeedback: string,
    updatedData: Partial<CompanyFeedbackEntity>,
  ): Promise<CompanyFeedbackEntity> {
    const feedback = this._repository.findOne({
      where: { id: idFeedback },
    });

    if (!feedback) {
      throw new Error(`Feedback with id ${idFeedback} not found`);
    }

    this._repository.update({ id: idFeedback }, updatedData);

    return { ...feedback, ...updatedData };
  }

  async insertFeedback(
    feedbackData: CompanyFeedbackType,
  ): Promise<CompanyFeedbackEntity> {
    try {
      const result = await this._repository.insert(feedbackData);
      const insertedId = result.identifiers[0].id;
      const savedFeedback = await this._repository.findOne({
        where: { id: insertedId },
      });
      return savedFeedback;
    } catch (error) {
      Logger.log(error);
    }
  }
}

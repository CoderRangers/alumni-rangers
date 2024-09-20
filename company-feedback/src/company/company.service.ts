/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppService } from 'src/app.service';
import { CompanyFeedbackType } from 'src/models/company-feedback.type';
import { CompanyEntity } from 'src/models/company.entity';
import { CompanyType } from 'src/models/company.type';
import { Feature, Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private _repository: Repository<CompanyEntity>,
    private _feedbackService: AppService,
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
    const newCompany = this._repository.findOne({
      where: { id: idCompany },
    });
    this._repository.update({ id: idCompany }, updatedData);
    return { ...newCompany, ...updatedData };
  }
  removeCompany(companyId: string) {
    this.getOnecompany(companyId).then(() => {
      this.removeFeedbacks(companyId);
      this.removeCompany(companyId);
    });
  }
  removeFeedbacks(companyId: string) {
    const deleteFeedback = [];
    const feedbacks = this._feedbackService
      .getAllFeedbacksOfOneCompany(companyId)
      .then((feedbackCompany) => {
        for (let i = 0; i < feedbackCompany.length; i++) {
          Logger.log(JSON.stringify(feedbackCompany[i]));
          deleteFeedback.push(feedbackCompany[i]);
          this._feedbackService.removeFeedback(feedbackCompany[i].id);
        }
        return deleteFeedback;
      });
  }
}

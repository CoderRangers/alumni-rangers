import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CompanyFeedbackType } from './models/company-feedback.type';
import { CompanyFeedbackEntity } from './models/company-feedback.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'findAllCompanyFeedback' })
  async findAll(): Promise<CompanyFeedbackType[]> {
    const feedbackData = await this.appService.getAllFeedback();
    return feedbackData;
  }

  @MessagePattern({ cmd: 'findOneCompanyFeedback' })
  async findOne(@Payload() feedbackId: string): Promise<CompanyFeedbackType> {
    const oneFeedback = await this.appService.getOneFeedback(feedbackId);
    return oneFeedback;
  }

  @MessagePattern({ cmd: 'removeCompanyFeedback' })
  async deleteCompanyFeeedback(id: string) {
    return this.appService.removeFeedback(id);
  }

  @MessagePattern({ cmd: 'updateCompanyFeedback' })
  async changeCompanyFeedback(
    idFeedback: string,
    updatedData: Partial<CompanyFeedbackEntity>,
  ): Promise<CompanyFeedbackEntity> {
    return this.appService.updateFeedback(idFeedback, updatedData);
  }

  @MessagePattern({ cmd: 'createCompanyFeedback' })
  newCompanyFeedback(
    feedbackData: CompanyFeedbackType,
  ): Promise<CompanyFeedbackEntity> {
    return this.appService.insertFeedback(feedbackData);
  }
}

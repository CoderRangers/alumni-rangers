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

  @MessagePattern({ cmd: 'findNextCompanyFeedback' })
  async findNext(@Payload() index: number): Promise<CompanyFeedbackType[]> {
    const feedbacks = await this.appService.getNextFeedbacks(index);
    return feedbacks;
  }

  @MessagePattern({ cmd: 'removeCompanyFeedback' })
  async deleteCompanyFeeedback(@Payload() id: string) {
    return this.appService.removeFeedback(id);
  }

  @MessagePattern({ cmd: 'updateCompanyFeedback' })
  async changeCompanyFeedback(@Payload() data): Promise<CompanyFeedbackEntity> {
    const idFeedback: string = data.id;
    const updatedData: Partial<CompanyFeedbackEntity> = data.updateDto;
    return this.appService.updateFeedback(idFeedback, updatedData);
  }

  @MessagePattern({ cmd: 'createCompanyFeedback' })
  newCompanyFeedback(
    @Payload() feedbackData: CompanyFeedbackType,
  ): Promise<CompanyFeedbackEntity> {
    return this.appService.insertFeedback(feedbackData);
  }
}

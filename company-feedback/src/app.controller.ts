import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CompanyFeedbackType } from './models/company-feedback.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'createCompanyFeedback' })
  async findAll(): Promise<CompanyFeedbackType[]> {
    const feedbackData = await this.appService.getAllFeedback();
    return feedbackData;
  }
}

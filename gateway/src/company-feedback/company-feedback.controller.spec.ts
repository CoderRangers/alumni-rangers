import { Test, TestingModule } from '@nestjs/testing';
import { CompanyFeedbackController } from './company-feedback.controller';
import { CompanyFeedbackService } from './company-feedback.service';

describe('CompanyFeedbackController', () => {
  let controller: CompanyFeedbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyFeedbackController],
      providers: [CompanyFeedbackService],
    }).compile();

    controller = module.get<CompanyFeedbackController>(CompanyFeedbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

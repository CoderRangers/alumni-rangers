import { Test, TestingModule } from '@nestjs/testing';
import { CompanyFeedbackService } from './company-feedback.service';

describe('CompanyFeedbackService', () => {
  let service: CompanyFeedbackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyFeedbackService],
    }).compile();

    service = module.get<CompanyFeedbackService>(CompanyFeedbackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

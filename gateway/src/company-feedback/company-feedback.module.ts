import { Module } from '@nestjs/common';
import { CompanyFeedbackService } from './company-feedback.service';
import { CompanyFeedbackController } from './company-feedback.controller';
import { AuthModule } from 'src/auth/auth.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule, AuthModule],
  controllers: [CompanyFeedbackController],
  providers: [CompanyFeedbackService],
})
export class CompanyFeedbackModule {}

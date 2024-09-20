import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/models/company.entity';
import { AppService } from 'src/app.service';
import { CompanyFeedbackEntity } from 'src/models/company-feedback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, CompanyFeedbackEntity])],
  controllers: [CompanyController],
  providers: [CompanyService, AppService],
})
export class CompanyModule {}

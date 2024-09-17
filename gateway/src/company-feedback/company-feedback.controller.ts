import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CompanyFeedbackService } from './company-feedback.service';
import { CreateCompanyFeedbackDto } from './dto/create-company-feedback.dto';
import { UpdateCompanyFeedbackDto } from './dto/update-company-feedback.dto';

@Controller()
export class CompanyFeedbackController {
  constructor(
    private readonly companyFeedbackService: CompanyFeedbackService,
  ) {}

  @MessagePattern('createCompanyFeedback')
  create(@Payload() createCompanyFeedbackDto: CreateCompanyFeedbackDto) {
    return this.companyFeedbackService.create(createCompanyFeedbackDto);
  }

  @MessagePattern('findAllCompanyFeedback')
  findAll() {
    return this.companyFeedbackService.findAll();
  }

  @MessagePattern('findOneCompanyFeedback')
  findOne(@Payload() id: number) {
    return this.companyFeedbackService.findOne(id);
  }

  @MessagePattern('updateCompanyFeedback')
  update(@Payload() updateCompanyFeedbackDto: UpdateCompanyFeedbackDto) {
    return this.companyFeedbackService.update(
      updateCompanyFeedbackDto.id,
      updateCompanyFeedbackDto,
    );
  }

  @MessagePattern('removeCompanyFeedback')
  remove(@Payload() id: number) {
    return this.companyFeedbackService.remove(id);
  }
}

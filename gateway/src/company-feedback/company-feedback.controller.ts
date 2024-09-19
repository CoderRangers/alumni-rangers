import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CompanyFeedbackService } from './company-feedback.service';
import { CreateCompanyFeedbackDto } from './dto/create-company-feedback.dto';
import { UpdateCompanyFeedbackDto } from './dto/update-company-feedback.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('feedback')
@UseGuards(AuthGuard)
export class CompanyFeedbackController {
  constructor(
    private readonly companyFeedbackService: CompanyFeedbackService,
  ) {}

  @Post()
  create(@Body() createCompanyFeedbackDto: CreateCompanyFeedbackDto) {
    return this.companyFeedbackService.create(createCompanyFeedbackDto);
  }

  @Get()
  findAll() {
    return this.companyFeedbackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyFeedbackService.findOne(id);
  }

  @Get('/next/:index')
  findNext(@Param('index') index: number) {
    return this.companyFeedbackService.findNext(index);
  }

  @Get('/company/:id')
  findAllFeedbacksOfOneCompany(@Param('id') id: string) {
    // TODO
    // return this.companyFeedbackService.findOne(id);
    return null;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyFeedbackDto: UpdateCompanyFeedbackDto,
  ) {
    return this.companyFeedbackService.update(id, updateCompanyFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyFeedbackService.remove(id);
  }
}

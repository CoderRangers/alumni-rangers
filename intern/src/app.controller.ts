import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateInternDto } from './dto/create-intern.dto';
import { validate } from 'class-validator';
//import { InternType } from './models/intern.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'addIntern' })
  async addIntern(intern: CreateInternDto) {
    validate(intern).then((error) => {
      if (error.length) {
        Logger.log(error);
      }
    });
    const addedIntern = await this.appService.createIntern(intern);
    return addedIntern;
  }

  @MessagePattern({ cmd: 'allIntern' })
  async findAll() {
    const internData = await this.appService.getAllIntern();
    return internData;
    /* response.status(HttpStatus.OK).json({
      message: 'All intern data found successfully',internData,}); */
    // response.status(err.status).json(err.response);
  }
  /*   findAll(): Array<InternType> {
    return this.appService.findAll();
  } */

  @MessagePattern({ cmd: 'oneIntern' })
  async findOne(id: string) {
    try {
      return this.appService.getIntern(id);
    } catch (err) {
      return err;
    }
  }

  @MessagePattern({ cmd: 'removeIntern' })
  async removeIntern(id: string) {
    return this.appService.deleteIntern(id);
  }
}

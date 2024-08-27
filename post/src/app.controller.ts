import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { PostEntity } from './models/post-entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'allPost' })
  findAll(): Promise<Array<PostEntity>> {
    return this.appService.getAllPosts();
  }
}

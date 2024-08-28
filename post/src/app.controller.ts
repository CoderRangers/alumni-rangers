import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { PostType } from './models/post-type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'allPost' })
  findAll(): Promise<Array<PostType>> {
    return this.appService.getAllPosts();
  }

  @MessagePattern({ cmd: 'onePost' })
  findOne(id: number): Promise<PostType> {
    return this.appService.getOnePost(id);
  }
}

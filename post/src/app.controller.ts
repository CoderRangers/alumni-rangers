import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { PostType } from './models/post-type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'nextPost' })
  findNext(index: number): Promise<Array<PostType>> {
    return this.appService.getNbPost(index);
  }

  @MessagePattern({ cmd: 'allPost' })
  findAll(): Promise<Array<PostType>> {
    return this.appService.getAllPosts();
  }

  @MessagePattern({ cmd: 'onePost' })
  findOne(id: string): Promise<PostType> {
    return this.appService.getOnePost(id);
  }
}

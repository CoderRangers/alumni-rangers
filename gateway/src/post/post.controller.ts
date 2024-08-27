import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { PostType } from './models/post.type';
import { Observable, take } from 'rxjs';

@Controller('post')
export class PostController {
  constructor(private _service: PostService) {}

  @Get()
  findAll(): Observable<Array<PostType>> {
    return this._service.findAll().pipe(take(1));
  }
}

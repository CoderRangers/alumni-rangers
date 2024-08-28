import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { PostService } from './post.service';
import { PostType } from './models/post.type';
import { Observable, take } from 'rxjs';
import { Response } from 'express';

@Controller('post')
export class PostController {
  constructor(private _service: PostService) {}

  @Get()
  findAll(): Observable<Array<PostType>> {
    return this._service.findAll().pipe(take(1));
  }

  @Get(':id')
  finfOne(@Param('id') id: string, @Res() res: Response): void {
    this._service
      .findOne(id)
      .pipe(take(1))
      .subscribe({
        next: (response: PostType | null) => {
          if (response) {
            res.status(HttpStatus.OK).send(response);
          } else {
            res.status(404).send();
          }
        },
        error: (error: any) => {
          res.status(500).send(error);
        },
      });
  }
}

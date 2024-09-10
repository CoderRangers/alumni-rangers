import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostType } from './models/post.type';
import { Observable, take } from 'rxjs';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('post')
@UseGuards(AuthGuard)
export class PostController {
  constructor(private _service: PostService) {}

  @Get()
  findAll(): Observable<Array<PostType>> {
    return this._service.findAll().pipe(take(1));
  }

  @Get(':index')
  findNext(@Param('index') index: number, @Res() res: Response): void {
    this._service
      .findNext(index)
      .pipe(take(1))
      .subscribe({
        next: (response: Array<PostType> | null) => {
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

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response): void {
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

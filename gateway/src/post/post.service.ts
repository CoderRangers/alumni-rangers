/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { PostType } from './models/post.type';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST') private _client: ClientProxy
  ) {}

  
  findAll(): Observable<Array<PostType>> {
    const pattern: any = { cmd: 'allPost' };
    return this._client.send<Array<PostType>>(pattern, {});
  }
}

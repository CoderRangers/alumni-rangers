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

  findNext(index: number): Observable<Array<PostType>> {
    const pattern: any = { cmd: 'nextPost' };
    return this._client.send<Array<PostType>>(pattern, index);
  }
  
  findAll(): Observable<Array<PostType>> {
    const pattern: any = { cmd: 'allPost' };
    return this._client.send<Array<PostType>>(pattern, {});
  }

  findOne(id: string): Observable<PostType> {
    const pattern: any = { cmd: 'onePost' };
    return this._client.send<PostType>(pattern, id);
  }
}

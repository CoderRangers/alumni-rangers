import { Inject, Injectable } from '@nestjs/common';
import { PostEntity } from './models/post-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PostEntity)
    private _repository: Repository<PostEntity>,
    @Inject('INTERN') private _client: ClientProxy,
  ) {}

  getAllPosts(): Promise<Array<PostEntity>> {
    return this._repository.find();
  }
}

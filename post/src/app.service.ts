import { Injectable } from '@nestjs/common';
import { PostEntity } from './models/post-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PostEntity)
    private _repository: Repository<PostEntity>,
  ) {}

  getAllPosts(): Promise<Array<PostEntity>> {
    return this._repository.find();
  }
}

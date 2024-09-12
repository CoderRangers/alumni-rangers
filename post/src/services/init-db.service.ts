import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/models/post-entity';
import { PostCategory, PostType } from 'src/models/post-type';
import { Repository } from 'typeorm';

const useInitDb: string = process.env.INIT_DB_WITH_MOCK;

@Injectable()
export class InitDbService {
  constructor(
    @InjectRepository(PostEntity)
    private _repository: Repository<PostEntity>,
  ) {
    if (useInitDb == 'true') {
      this._populateDbWitMocks();
    }
  }

  private _mockPost: Array<PostType> = [
    {
      id: '1',
      title: 'First Post',
      content: 'This is the content of the first post.',
      media: 'http://example.com/media1.jpg',
      postedAt: new Date('2023-10-01T10:00:00Z'),
      author: {
        id: 'author1',
        firstname: 'John Doe',
        lastname: 'jeanjean',
        emails: ['john.doe@example.com'],
        gender: 'indefined',
        phone: 'nonantetrois',
        occupation: 'branleur professionel',
        poe: {
          id: 1,
          beginAt: new Date('2023-10-01'),
          endAt: new Date('2023-10-01'),
          name: 'dev pasweb',
          type: 'feu',
        },
      },
      likes: [],
      comments: [],
      category: PostCategory.news,
    },
  ];

  _populateDbWitMocks() {
    this._repository
      .createQueryBuilder()
      .insert()
      .into(PostEntity)
      .values(this._mockPost)
      .execute();
  }
}

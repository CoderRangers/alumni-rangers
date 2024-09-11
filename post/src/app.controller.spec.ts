import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostCategory, PostType } from './models/post-type';
import { PostEntity } from './models/post-entity';

const mockPost: Array<PostType> = [
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

describe('AppController', () => {
  let appController: AppController;
  const appService: AppService = new AppService(null, null);

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: appService }],
    }).compile();

    appController = app.get<AppController>(AppController);
    //appService = app.get<AppService>(AppService);
  });

  it('findAll()', async () => {
    jest.spyOn(appService, 'getAllPosts').mockResolvedValue(mockPost);
    const result = await appController.findAll();
    expect(result).toBe(mockPost);
  });
});

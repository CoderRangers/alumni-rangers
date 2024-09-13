/* eslint-disable @typescript-eslint/no-unused-vars */
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { InternType } from './models/intern-type';
import { PostEntity } from './models/post-entity';
import { PostCategory, PostType } from './models/post-type';
import { Repository } from 'typeorm';
const mockAuthor: InternType = {
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
};

const mockPostEntity: Array<any> = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post.',
    media: 'http://example.com/media1.jpg',
    postedAt: new Date('2023-10-01T10:00:00Z'),
    likes: [],
    comments: [],
    authorId: 'author1',
    category: 'news', //key of array
  },
];
const mockPostType: Array<PostType> = [
  {
    id: '1',
    title: 'First Post',
    content: 'This is the content of the first post.',
    media: 'http://example.com/media1.jpg',
    postedAt: new Date('2023-10-01T10:00:00Z'),
    likes: [],
    comments: [],
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
    category: PostCategory.news,
  },
];

// describe('AppService', () => {
//   let appService: AppService;
//   let mockProxy: jest.Mocked<ClientProxy>;
//   let mockRepo: jest.Mocked<Repository<PostEntity>>;

//   beforeEach(async () => {
//     mockProxy = {
//       send: jest.fn(),
//     } as unknown as jest.Mocked<ClientProxy>;

//     mockRepo = {
//       find: jest.fn(),
//       findOne: jest.fn(),
//     } as unknown as jest.Mocked<Repository<PostEntity>>;

//     appService = new AppService(mockRepo, mockProxy);
//   });

//   it('getAllPosts', async () => {
//     // intercept http request and return fake value
//     mockRepo.find.mockResolvedValue(mockPostEntity);
//     mockProxy.send.mockReturnValue(of(mockAuthor));

//     const result = await appService.getAllPosts();
//     console.log(mockPostType);
//     console.log(result);
//     expect(result).toBe(mockPostType);
//   });
// });

describe('appService', () => {
  let appService: AppService;
  let mockProxy: jasmine.SpyObj<ClientProxy>;
  let mockRepo: jasmine.SpyObj<Repository<PostEntity>>;

  beforeEach(async () => {
    mockProxy = jasmine.createSpyObj('ClientProxy', ['send']);
    mockRepo = jasmine.createSpyObj('Repository<PostEntity>', [
      'find',
      'findOne',
    ]);

    appService = new AppService(mockRepo, mockProxy);
  });
  //tester la mise en place du service avec tobeTruthy
  it('service test', () => {
    expect(appService).toBeTruthy();
  });

  // it('getAllPosts', async () => {
  //   // intercept http request and return fake value
  //   mockRepo.find.and.resolveTo(mockPostEntity);
  //   mockProxy.send.and.returnValue(of(mockAuthor));
  //   const result = await appService.getAllPosts();
  //   expect(result).toBe(mockPostType);
  // });
});

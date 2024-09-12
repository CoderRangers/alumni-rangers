import { Inject, Injectable, Logger } from '@nestjs/common';
import { PostEntity } from './models/post-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';
import { PostCategory, PostType } from './models/post-type';
import { InternType } from './models/intern-type';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  nbPosts: number = 3;

  constructor(
    @InjectRepository(PostEntity)
    private _repository: Repository<PostEntity>,
    @Inject('INTERN') private _client: ClientProxy,
  ) {}

  getNbPost(index: number): Promise<any> {
    return this._repository
      .find({
        order: { postedAt: 'DESC' },
        take: this.nbPosts,
        skip: this.nbPosts * index,
      })
      .then(async (posts) => {
        const newPosts: Array<PostType> = [];
        if (posts.length != 0) {
          const pattern = { cmd: 'oneIntern' };
          for (const post of posts) {
            const actualPost: PostType = {
              id: post.id,
              title: post.title,
              content: post.content,
              media: post.media,
              postedAt: post.postedAt,
              category: PostCategory[post.category],
              author: await lastValueFrom(
                this._client.send<InternType>(pattern, post.authorId),
              ),
            };

            newPosts.push(actualPost);
          }
        }
        return newPosts;
      })
      .catch((error) => Logger.log(error));
  }

  getAllPosts(): Promise<any> {
    return this._repository
      .find({ order: { postedAt: 'DESC' } })
      .then(async (posts) => {
        const newPosts: Array<PostType> = [];
        if (posts.length != 0) {
          const pattern = { cmd: 'oneIntern' };
          for (const post of posts) {
            const actualPost: PostType = {
              id: post.id,
              title: post.title,
              content: post.content,
              media: post.media,
              postedAt: post.postedAt,
              category: PostCategory[post.category],
              author: await lastValueFrom(
                this._client.send<InternType>(pattern, post.authorId),
              ),
            };

            newPosts.push(actualPost);
          }
        }
        return newPosts;
      })
      .catch((error) => Logger.log(error));
  }

  getOnePost(identifier: string): Promise<PostType> {
    return this._repository
      .findOne({ where: { id: identifier } })
      .then(async (post) => {
        const pattern = { cmd: 'oneIntern' };
        const newPost: PostType = {
          id: post.id,
          title: post.title,
          content: post.content,
          media: post.media,
          postedAt: post.postedAt,
          category: PostCategory[post.category],
          author: await lastValueFrom(
            this._client.send<InternType>(pattern, post.authorId),
          ),
        };
        return newPost;
      });
  }
}

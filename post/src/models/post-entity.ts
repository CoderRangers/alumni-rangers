import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { InternType } from './intern-type';
// import { CommentType } from './comment-type';

export enum Role {
  POST = 'post',
  ADMIN = 'admin',
}
@Entity({
  name: 'post',
})
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 75 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  media: string;

  @Column()
  category: string;

  @Column()
  postedAt: Date;

  @Column()
  authorId: string;

  // @Column()
  // likes: InternType[];

  // @Column()
  // comments: CommentType[];
}

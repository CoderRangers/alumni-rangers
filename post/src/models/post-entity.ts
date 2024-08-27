import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  POST = 'post',
  ADMIN = 'admin',
}
@Entity({
  name: 'post',
})
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 75 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  media: string;

  @Column()
  type: string;

  @Column()
  postedAt: Date;

  @Column()
  authorId: string;
}

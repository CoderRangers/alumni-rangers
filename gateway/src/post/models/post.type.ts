export type PostType = {
  id?: number;
  title?: string;
  content: string;
  media?: string;
  postedAt: Date;
  authorId: string;
};

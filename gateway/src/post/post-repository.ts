/* import { PostType } from './models/post.type';

export class PostRepository {
  private _posts: Array<PostType> = [];

  constructor() {
    this._populate();
  }

  findAll(): Array<PostType> {
    return this._posts;
  }

  private _populate(): void {
    this._posts.push({
      id: 1,
      title: `Titre 1`,
      content: `le texte du post`,
      media: `le media du post`,
      postedAt: new Date(2024, 6, 10),
      author: {
        id: 1,
        lastname: 'Mauré',
        firstname: 'Julien',
        occupation: 'Stagiaire',
        company: {
          id: 1,
          name: 'Aélion',
        },
        poe: {
          id: 1,
          name: 'POEC dev Mobile',
          beginAt: new Date(2024, 5, 24),
          endAt: new Date(2024, 8, 24),
          type: 'POEC',
        },
      },
    });

    this._posts.push({
      id: 2,
      title: `Titre 2`,
      content: `le texte du post`,
      media: `le media du post`,
      postedAt: new Date(2024, 6, 9),
      author: {
        id: 2,
        lastname: 'Dupont',
        firstname: 'Antoine',
        occupation: `demi de mélée`,
        company: {
          id: 2,
          name: 'Stade Toulousain',
        },
        poe: {
          id: 1,
          name: 'POEC dev Mobile',
          beginAt: new Date(2024, 5, 24),
          endAt: new Date(2024, 8, 24),
          type: 'POEC',
        },
      },
    });

    this._posts.push({
      id: 3,
      title: `Titre 3`,
      content: `le texte du post`,
      media: `le media du post`,
      postedAt: new Date(2024, 6, 8),
      author: {
        id: 1,
        lastname: 'Mauré',
        firstname: 'Julien',
        occupation: 'Stagiaire',
        company: {
          id: 1,
          name: 'Aélion',
        },
        poe: {
          id: 1,
          name: 'POEC dev Mobile',
          beginAt: new Date(2024, 5, 24),
          endAt: new Date(2024, 8, 24),
          type: 'POEC',
        },
      },
    });
  }
}
 */
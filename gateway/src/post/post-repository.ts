import { PostType } from './models/post.type'

export class PostRepository {
    private _posts: Array<PostType> = []

    constructor() {
        this._populate()
    }

    findAll(): Array<PostType> {
        return this._posts
    }

    private _populate(): void {
        this._posts.push(
            {
                id: 1,
                title: 'Post test 1',
                content: 'Post content 1',
                postedAt: new Date(2024, 7, 10),
                author: {
                    id: 1,
                    lastname: 'Aubert',
                    firstname: 'Jean-Luc',
                    occupation: 'Formateur',
                    company: {
                        id: 1,
                        name: 'Aelion',
                    },
                    poe: {
                        id: 1,
                        name: 'Dev Mobile',
                        type: 'POEC',
                        beginAt: new Date(2024, 6, 24),
                        endAt: new Date(2024, 9, 24),
                    },
                },
            },
            {
                id: 2,
                title: 'Post test 2',
                content: 'Post content 2',
                postedAt: new Date(2024, 7, 9),
                author: {
                    id: 2,
                    lastname: 'Michmuch',
                    firstname: 'Jean',
                    occupation: 'Formateur',
                    company: {
                        id: 1,
                        name: 'Aelion',
                    },
                    poe: {
                        id: 2,
                        name: 'Java/Angular',
                        type: 'POEI',
                        beginAt: new Date(2023, 6, 24),
                        endAt: new Date(2023, 9, 24),
                    },
                },
            }
        )
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PostCategory, PostType } from '../types/post/post-type';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly URI = 'http://localhost:3000/post'

  constructor(
    private _httpClient: HttpClient
  ) { }

  findAllMock(): Array<PostType> {
    const posts: Array<PostType> = [
      {
        id: 'a',
        title: 'Titre A',
        content: 'Contenu A : bla bla bla',
        media: 'https://picsum.photos/80/80?random',
        postedAt: new Date('27/08/2024'),
        author: 
        {
          firstname: "Cyril",
          lastname: "Baille",
          gender: "M",
          mails: ["mail3", "mail4"],
          phone: "0605040311",
          occupation: "Pilier",
          company: {
              id: 1,
              name: "Stade Toulousain"
              },
          poe: {
              id: 2,
              beginAt: new Date("2024/05/05"),
              endAt: new Date("2024/07/05"),
              name: "Les avants",
              type: "POEI"
          }
      },
        category: PostCategory.news,
      },
      {
        id: 'b',
        title: 'Titre B',
        content: 'Contenu B : bla bla bla',
        media: 'https://picsum.photos/80/80?random',
        postedAt: new Date('26/08/2024'),
        author: 
        {
          firstname: "Antoine",
          lastname: "Dupont",
          gender: "M",
          mails: ["mail1", "mail2"],
          phone: "0605040311",
          occupation: "demi de mélée",
          company: {
              id: 1,
              name: "Stade Toulousain"
              },
          poe: {
              id: 1,
              beginAt: new Date("2024/05/05"),
              endAt: new Date("2024/07/05"),
              name: "Les trois quarts",
              type: "POEI"
          }
      },
        category: PostCategory.jobOffer,
      },
      {
        id: 'c',
        title: 'Titre C',
        content: 'Contenu C : bla bla bla',
        media: 'https://picsum.photos/80/80?random',
        postedAt: new Date('25/08/2024'),
        author: 
        {
          firstname: "Romain",
          lastname: "Ntamack",
          gender: "M",
          mails: ["mail5", "mail6"],
          phone: "0605040347",
          occupation: "demi d'ouverture",
          company: {
              id: 1,
              name: "Stade Toulousain"
              },
          poe: {
              id: 1,
              beginAt: new Date("2024/05/05"),
              endAt: new Date("2024/07/05"),
              name: "Les trois quarts",
              type: "POEI"
          }
      },
        category: PostCategory.internshipOffer,
      },
    ]
    return posts
  }

/*   findAll(): Observable<Array<PostType>> {
    return this._httpClient.get<Array<PostType>>(this.URI)
    .pipe(
      map((posts: Array<any>) => { // Transform an observable to another observable
        return posts.map((post: any) => {
          return { // Deserialization
            id: post.id,
            title: post.title,
            content: post.content,
            postedAt: new Date(post.postedAt),
            media: post.media,
            author: {
              id: post.author.id,
              firstname: post.author.firstname,
              lastname: post.author.lastname,
              occupation: post.author.occupation,
              company: {
                id: post.author.company.id,
                name: post.author.company.name,
              },
              poe: {
                id: post.author.poe.id,
                name: post.author.poe.name,
                beginAt: new Date(post.author.poe.beginAt),
                endAt: new Date(post.author.poe.endAt),
              }
            }
          }
        }) // Transform an array to another array
      })
    )
  } */
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PostCategory, PostType } from '../types/post/post-type';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly URI = 'http://localhost:3000/post'

  private _posts!: Array<PostType>
  private _indexOfLastDisplayedPost: number = 0

  constructor(
    private _httpClient: HttpClient
  ) {
    this._posts = this._populatePosts()
  }

  findNext(nbNextPosts: number): Array<PostType> {
    let nextPosts: Array<PostType> = []
    if(this._indexOfLastDisplayedPost + nbNextPosts <= this._posts.length) {
      nextPosts = this._posts.slice(this._indexOfLastDisplayedPost, this._indexOfLastDisplayedPost + nbNextPosts)
      this._indexOfLastDisplayedPost += nbNextPosts
    }
    return nextPosts
  }

  private _populatePosts(): Array<PostType> {
    const posts: Array<PostType> = [
      {
        id: 'a',
        title: 'Offre d\'emploi',
        content: 'Développeur Fullstack chez Ludwig qui aura comme mission la conception et le développement de nouvelles solutions e-commerces pour le groupe',
        media: '',
        postedAt: new Date('2024-08-27T09:10:15'),
        author: 
        {
          id:1,
          firstname: "Cyril",
          lastname: "Baille",
          gender: "M",
          mails: ["mail3", "mail4"],
          phone: "0605040311",
          occupation: "Scrum Master",
          company: {
              id: 1,
              name: "CAPGEMINI"
              },
          poe: {
              id: 2,
              beginAt: new Date("2024/05/05"),
              endAt: new Date("2024/07/05"),
              name: "Développement d'application mobile",
              type: "POEI"
          }
      },
        category: PostCategory.news,
      },
      {
        id: 'b',
        title: 'Poe DEVOPS',
        content: 'Préparation opérationnelle à l\'Emploi',
        media: '/assets/logo-france-travail.jpg',
        postedAt: new Date('2024-08-26T13:32:03'),
        author: 
        {
          id:2,
          firstname: "Antoine",
          lastname: "Dupont",
          gender: "M",
          mails: ["mail1", "mail2"],
          phone: "0605040311",
          occupation: "Développeur Fullstack",
          company: {
              id: 1,
              name: "CGDIM"
              },
          poe: {
              id: 1,
              beginAt: new Date("2024/05/05"),
              endAt: new Date("2024/07/05"),
              name: "POEI DEV MOB",
              type: "POEI"
          }
      },
        category: PostCategory.jobOffer,
      },
      {
        id: 'c',
        title: 'Soutenance des stagiaires POEC dev mobile',
        content: 'le développement d\'un reseau social privé pour le centre de formation AELION est enfin achevé par les efforts des stagiaires de centre et sous l\'encadrement de notre devéloppeur JEAN LUC AUBERT',
        media: '/assets/icon/aelion_logo.png',
        postedAt: new Date('2024-08-25T22:42:00'),
        author: 
        {
          id:3,
          firstname: "Mathilde",
          lastname: "Ntamack",
          gender: "M",
          mails: ["mail5", "mail6"],
          phone: "0605040347",
          occupation: "Consultante fonctionnelle",
          company: {
              id: 1,
              name: "AELION"
              },
          poe: {
              id: 1,
              beginAt: new Date("2024/05/05"),
              endAt: new Date("2024/07/05"),
              name: "POEC DEVELOPPEMENT",
              type: "POEC"
          }
      },
        category: PostCategory.news,
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

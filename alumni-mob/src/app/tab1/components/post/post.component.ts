import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InternService } from 'src/app/core/services/intern.service';
import { PostService } from 'src/app/core/services/post.service';
import { InternType } from 'src/app/core/types/intern-type';
import { PostType } from 'src/app/core/types/post.type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  implements OnInit, OnDestroy {

  /**
   * List of interns to be displayed in the view
   * @var InternType[]
   */
  public posts: Array<PostType> = []
  public isCompanyFilterActive: boolean = false
  private _subscription!: Subscription

  constructor(
    private _service: PostService // Dependency Injection
  ) { }

  ngOnInit() {
    this._subscription = this._service.findAll()
    .subscribe({
      next: (posts: Array<PostType>) => {
        this.posts = posts
      },  // next only run when getting a 20x or 30x HTTP status
      error: (error: any) => {}, // error only run when getting a 50x HTTP status
      complete: () => {
        this.posts.sort((a: PostType, b: PostType) => {
          if (a.postedAt < b.postedAt) {
            return 1
          } else if (a.postedAt == b.postedAt) {
            return 0
          } else {
            return -1
          }
        })
      }
    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

}

import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
//import { InternService } from 'src/app/core/services/intern.service'
import { PostService } from 'src/app/core/services/post.service'
import { InternType } from 'src/app/core/types/intern/intern-type'
import { PostType } from 'src/app/core/types/post/post-type'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {

  /**
   * List of interns to be displayed in the view
   * @var InternType[]
   */
  /*public posts: Array<PostType> = []*/
  @Input()
  public post!: PostType
  @Input()
  public index!:number

  private _subscription!: Subscription

  constructor(
    private _service: PostService // Dependency Injection
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    /*this._subscription this._service.findAllMock()
      // .subscribe({
      //   next: (posts: Array<PostType>) => {
      //     this.posts = posts
      //   },
      //   error: (error: any) => {},
      //   complete: () => {}
      // }) */
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}

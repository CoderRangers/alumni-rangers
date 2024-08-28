import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { PostService } from 'src/app/core/services/post.service';
import { PostType } from 'src/app/core/types/post/post-type';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent  implements OnInit {

  public posts!: Array<PostType>

  constructor(private _postService: PostService) { }

  ngOnInit() {
    // this.posts = this._postService.findAllMock()
    this.posts = this._postService.findNext(3)
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    const next3Posts = this._postService.findNext(3)
    this.posts.concat(next3Posts)
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}

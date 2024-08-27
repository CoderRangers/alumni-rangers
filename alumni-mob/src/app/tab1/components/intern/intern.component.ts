import { Component, Input, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { InternService } from 'src/app/core/services/intern.service';
import { InternTransformer } from 'src/app/core/types/intern/intern-transformer';
import { InternType } from 'src/app/core/types/intern/intern-type';
import { PostType } from 'src/app/core/types/post/post-type';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss'],
})

export class InternComponent  implements OnInit {
 
  public interns: Array<InternType> = [];

  private _subscription!: Subscription;

  constructor(private _service: InternService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
/*   ngOnInit(): void {
    this._subscription = this._service.findAll()
    .subscribe({
      next: (interns: Array<InternTransformer>) => {
        this.interns = interns
      },
      error: (error: any) => {},
      complete: () => {}
    })
  } */

  ngOnInit(): void {
    this._subscription = this._service.findAll().subscribe({
      next: (interns: Array<InternType>) => {
        this.interns = interns
      },
      error: (error: any) => {},
      complete: () => {}
    })
  }

}

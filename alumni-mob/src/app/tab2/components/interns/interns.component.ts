import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InternService } from 'src/app/core/services/intern.service';
import { InternTransformer } from 'src/app/core/types/intern/intern-transformer';
import { InternType } from 'src/app/core/types/intern/intern-type';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.scss'],
})
export class InternsComponent  implements OnInit, OnDestroy {
  
  private _subscription!: Subscription;
  public interns: Array<InternType> = [];

  constructor(private _service: InternService) { }

  ngOnInit() {
    this._subscription = this._service.findAll().subscribe({
      next: (interns: Array<InternType>) => {
        this.interns = interns
        // console.log(`interns : ${JSON.stringify(interns)}`)
      },
      error: (error: any) => {},
      complete: () => {}
    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}

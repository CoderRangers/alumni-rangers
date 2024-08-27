import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InternService } from 'src/app/core/services/intern.service';
import { InternTransformer } from 'src/app/core/types/intern/intern-transformer';

@Component({
  selector: 'app-intern-info',
  templateUrl: './intern-info.component.html',
  styleUrls: ['./intern-info.component.scss'],
})
export class InternInfoComponent  implements OnInit {

  private _subscription!: Subscription;
  public intern: InternTransformer = new InternTransformer;
  //private route = inject(ActivatedRoute);
  private id:string | undefined;

  constructor(private _service: InternService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      //console.log("param : "+ params.get('id'))
      const id = params.get('id');
    
      if(id) {
        this._subscription = this._service.findOne(id).subscribe({
          next: (intern: InternTransformer) => {
            this.intern = intern
            //console.log("intern info " + id)
          },
          error: (error: any) => {},
          complete: () => {}
        })
      }
      else {
        this._router.navigate(['/tabs/tab2'])
      }
    });
  }
}

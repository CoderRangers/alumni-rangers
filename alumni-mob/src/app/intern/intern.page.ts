import { Component, OnInit } from '@angular/core';
import { InternType } from '../core/types/intern/intern-type';
import { InternService } from '../core/services/intern.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.page.html',
  styleUrls: ['./intern.page.scss'],
})
export class InternPage implements OnInit {

  public intern!: InternType

  constructor(private _service: InternService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      // console.log("param : "+ params.get('id'))
      const id = params.get('id');
    
      if(id) {
        this._service.findOne(id).subscribe({
          next: (intern: InternType) => {
            this.intern = intern
            // console.log(`intern: ${JSON.stringify(intern)}`)
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

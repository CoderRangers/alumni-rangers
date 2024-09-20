import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { CompanyService } from 'src/app/core/services/company.service';
import { CompanyType } from 'src/app/core/types/company-feedback/company-feed.type';

@Component({
  selector: 'app-company-feedbacks',
  templateUrl: './company-feedbacks.page.html',
  styleUrls: ['./company-feedbacks.page.scss'],
})
export class CompanyFeedbacksPage implements OnInit {
  public company?: CompanyType;

  constructor(private _route: ActivatedRoute,
    private _companyService: CompanyService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(async params => {
      const id = params.get('id');
      if(id) {
        this._companyService.findOne(id).pipe(take(1))
        .subscribe((comp) => {
          this.company = comp;
        })
      }
      else {
        this._router.navigateByUrl('tabs/tab4');
      }
    })
  }

  back() {
    this._router.navigateByUrl('tabs/tab4');
  }
}

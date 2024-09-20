import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { take } from 'rxjs';
import { CompanyService } from 'src/app/core/services/company.service';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { CompanyType } from 'src/app/core/types/company-feedback/company-feed.type';
import { CompanyFeedbackType } from 'src/app/core/types/company-feedback/company-feedback.type';

@Component({
  selector: 'app-company-feedbacks',
  templateUrl: './company-feedbacks.page.html',
  styleUrls: ['./company-feedbacks.page.scss'],
})
export class CompanyFeedbacksPage implements OnInit {
  public company?: CompanyType;
  public listFeedback!: Array<CompanyFeedbackType>;
  public idCompany: string = '';

  constructor(private _route: ActivatedRoute,
    private _companyService: CompanyService,
    private _feedBackService: FeedbackService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(async params => {
      const id = params.get('id');
      if(id) {
        this.idCompany = id;
      }
      else {
        this._router.navigateByUrl('tabs/tab4');
      }
    })
    this._companyService.findOne(this.idCompany).pipe(take(1))
      .subscribe((comp) => {
        this.company = comp;
      })
      console.log('on init before');
      this._feedBackService.findNext(this.idCompany).pipe(take(1))
        .subscribe({
          next: (response: any) => {
            this.listFeedback = response;
          }
        })
      console.log('on init after');
    console.log(this.listFeedback);
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    let nextFeedbacks!: Array<CompanyFeedbackType>;
    this._feedBackService
      .findNext(this.idCompany)
      .pipe(take(1))
      .subscribe({
        next: (response: any) => {
          nextFeedbacks = response;
          this.listFeedback = this.listFeedback.concat(nextFeedbacks);
        },
      });
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  back() {
    this._feedBackService.indexOfLastDisplayedFeedback = 0;
    this._router.navigateByUrl('tabs/tab4');
  }
}

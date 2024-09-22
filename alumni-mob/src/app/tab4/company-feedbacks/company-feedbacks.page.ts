import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { take } from 'rxjs';
import { CompanyService } from 'src/app/core/services/company.service';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { CompanyType } from 'src/app/core/types/company-feedback/company-feed.type';
import { CompanyFeedbackType } from 'src/app/core/types/company-feedback/company-feedback.type';
import { FeedbackFormStep3Component } from '../components/feedback-form-step3/feedback-form-step3.component';
import { FeedbackFormModalsService } from '../services/feedback-form-modals.service';

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
    private _router: Router,
    private _modalCtrl: ModalController,
    private _feedbackFormModals: FeedbackFormModalsService,
    private _modalController: ModalController
  ) { }

  ngOnInit() {
    this.listFeedback = [];
    this._feedBackService.indexOfLastDisplayedFeedback = 0;
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
    this._feedBackService.findNext(this.idCompany).pipe(take(1))
      .subscribe({
        next: (response: any) => {
          this.listFeedback = response;
        }
      })
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
    this._router.navigateByUrl('tabs/tab4');
  }

  async dismiss() {
    await this._modalController.dismiss();
  }

  async addFeedback() {
    console.log(`comp : ${JSON.stringify(this.company)}`)
    const newModalId = 'feedback-form-step-3';
    const modal = await this._modalCtrl.create({
      component: FeedbackFormStep3Component,
      id: newModalId,
      componentProps: {
        company: this.company,
        companyName: this.company?.name
      }
    });
    this._feedbackFormModals.modalIds.push(newModalId);
    modal.present();
  }
}

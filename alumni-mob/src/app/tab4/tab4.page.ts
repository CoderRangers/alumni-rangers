import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CompanyCategory,
  CompanyType,
} from '../core/types/company-feedback/company-feed.type';
import { CompanyRating } from '../core/types/company-feedback/company-rating.type';
import { IonInput } from '@ionic/angular';
import { CompanyService } from '../core/services/company.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FeedbackFormStep1Component } from './components/feedback-form-step1/feedback-form-step1.component';
import { FeedbackFormModalsService } from './services/feedback-form-modals.service';
import { FeedbackService } from '../core/services/feedback.service';
import { InternService } from '../core/services/intern.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public companys!: Array<CompanyType>;
  public filteredComp!: Array<CompanyType>;
  public inputModel = '';

  constructor(
    private _companyService: CompanyService,
    private _feedbackService: FeedbackService,
    private _router: Router,
    private _modalController: ModalController,
    private _feedbackFormModals: FeedbackFormModalsService,
    private _internService: InternService
  ) {}

  ngOnInit() {
    this._companyService
      .findAll()
      .pipe(take(1))
      .subscribe({
        next: (response: any) => {
          this.companys = response;
          this.filteredComp = this.companys;
        },
      });
  }

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  onInput(ev: any) {
    const value = ev.target!.value;
    this.filteredComp = this.companys.filter((comp) =>
      comp.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  selectCompany(companyId: string) {
    this._feedbackService.indexOfLastDisplayedFeedback = 0;
    this._router.navigate(['tabs', 'tab4', 'company-feedbacks', companyId]);
  }

  async dismiss() {
    await this._modalController.dismiss();
  }

  async addFeedback() {
    const newModalId = 'feedback-form-step-1'
    const modal = await this._modalController.create({
      component: FeedbackFormStep1Component,
      id: newModalId,
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();
  }
}

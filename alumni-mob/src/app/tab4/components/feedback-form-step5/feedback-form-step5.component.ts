import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FeedbackFormStep6Component } from '../feedback-form-step6/feedback-form-step6.component';
import { CompanyFeedbackType } from 'src/app/core/types/company-feedback/company-feedback.type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyRating } from 'src/app/core/types/company-feedback/company-rating.type';

@Component({
  selector: 'app-feedback-form-step5',
  templateUrl: './feedback-form-step5.component.html',
  styleUrls: ['./feedback-form-step5.component.scss'],
})
export class FeedbackFormStep5Component  implements OnInit {

  // Values filled by the previous modals, when creating this modal
  public partialFeedback!:any

  public feedbackMainContentForm: FormGroup = new FormGroup({})
  public companyRatings = Object.values(CompanyRating);

  constructor(
    private modalCtrl: ModalController,
    private _feedbackFormModals: FeedbackFormModalsService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.feedbackMainContentForm = this._formBuilder.group({
      feedbackTitle: ['', Validators.required],
      rating: ['', Validators.required],
      feedbackText: ['', Validators.required]
    })
  }

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit(): void {
    const fullFeedback: CompanyFeedbackType = {
      company: this.partialFeedback.company,
      feedbackTitle: this.feedbackMainContentForm.value.feedbackTitle,
      rating: this.feedbackMainContentForm.value.rating,
      feedbackText: this.feedbackMainContentForm.value.feedbackText,
      jobTitle: this.partialFeedback.jobTitle,
      jobStartDate: this.partialFeedback.startDate,
      jobEndDate: this.partialFeedback.endDate,
      salaryFormat: this.partialFeedback.salaryFormat,
      postedAt: new Date(),
      // TODO: retrieve the connected user's internID, lastname, and firstname 
      lastname: '',
      firstname: '',
      internId: ''
    }
    console.log(`Step 5 form content : ${JSON.stringify(fullFeedback)}`)
    if (this.feedbackMainContentForm.valid) {
      this.openStep6Modal(fullFeedback)
    }
  }

  async openStep6Modal(feedback: CompanyFeedbackType) {
    const newModalId = 'feedback-form-step-6'
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep6Component,
      id: newModalId,
      componentProps: {
        companyFeedback: feedback
      }
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();
  }
}

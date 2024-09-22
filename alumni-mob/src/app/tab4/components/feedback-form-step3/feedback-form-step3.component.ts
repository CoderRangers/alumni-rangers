import { Component, OnInit } from '@angular/core';
import { ModalController, ToggleChangeEventDetail } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FeedbackFormStep4Component } from '../feedback-form-step4/feedback-form-step4.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyType } from 'src/app/core/types/company-type';
import { SalaryFormat } from 'src/app/core/types/company-feedback/salary-format.enum';
import { IonToggleCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-feedback-form-step3',
  templateUrl: './feedback-form-step3.component.html',
  styleUrls: ['./feedback-form-step3.component.scss'],
})
export class FeedbackFormStep3Component  implements OnInit {

  // Values filled by the previous modals, when creating this modal
  public companyName: string = '' 
  public company!: CompanyType

  public jobInfoForm: FormGroup = new FormGroup({})
  public salaryFormats = Object.values(SalaryFormat);

  constructor(
    private modalCtrl: ModalController,
    private _feedbackFormModals: FeedbackFormModalsService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.jobInfoForm = this._formBuilder.group({
      jobTitle: ['', Validators.required],
      startDate: ['', Validators.required],
      stillOnTheJob: [],
      // TODO : write a custom validator to check that startDate < endDate
      // A possible approch: https://stackoverflow.com/questions/61503538/custom-validator-for-date-before-in-angular
      endDate: ['', Validators.required],
      salaryLow: [0, Validators.min(0)],
      salaryFormat: ['Annuel brut'],
      salaryNotARange: [],
      salaryHigh: [0, Validators.min(0)]
    })
  }

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    this.openStep4Modal(null)
  }

  async openStep4Modal(feedback: any) {
    const newModalId = 'feedback-form-step-4'
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep4Component,
      id: newModalId,
      componentProps: {
        partialFeedback: feedback
      }
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();
  }

  onSubmit(): void {
    const partialFeedback = {
      companyName: this.companyName,
      company: this.company,
      jobTitle: this.jobInfoForm.value.jobTitle,
      startDate: this.jobInfoForm.value.startDate,
      stillOnTheJob: this.jobInfoForm.value.stillOnTheJob,
      endDate: this.jobInfoForm.value.endDate,
      salaryLow: this.jobInfoForm.value.salaryLow,
      salaryFormat: this.jobInfoForm.value.salaryFormat,
      salaryNotARange: this.jobInfoForm.value.salaryNotARange,
      salaryHigh: this.jobInfoForm.value.salaryHigh,
    }
    console.log(`Step 3 form content : ${JSON.stringify(partialFeedback)}`)
    if (this.jobInfoForm.valid) {
      this.openStep4Modal(partialFeedback)
    }
  }

  endDateToggle(event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
    if (this.jobInfoForm.value.stillOnTheJob) {
      const [todayDate, todayTime] = new Date().toISOString().split('T')
      this.jobInfoForm.controls['endDate'].setValue(todayDate)
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CheckboxChangeEventDetail, ModalController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FeedbackFormStep5Component } from '../feedback-form-step5/feedback-form-step5.component';
import { IonCheckboxCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-feedback-form-step4',
  templateUrl: './feedback-form-step4.component.html',
  styleUrls: ['./feedback-form-step4.component.scss'],
})
export class FeedbackFormStep4Component  implements OnInit {

  // Values filled by the previous modals, when creating this modal
  public partialFeedback!:any

  public charterAgreedTo: boolean = false;

  constructor(private modalCtrl: ModalController, private _feedbackFormModals: FeedbackFormModalsService) {}

  ngOnInit() {}

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    this.openStep5Modal(this.partialFeedback)
  }

  async openStep5Modal(feedbackData: any) {
    const newModalId = 'feedback-form-step-5'
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep5Component,
      id: newModalId,
      componentProps: {
        partialFeedback: feedbackData
      }
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();
  }

  toggleCharterAgreement($event: IonCheckboxCustomEvent<CheckboxChangeEventDetail<any>>) {
    if(!this.charterAgreedTo) {
      this.charterAgreedTo = true
    } else {
      this.charterAgreedTo = false
    }
  }
}

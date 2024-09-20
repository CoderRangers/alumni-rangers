import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FeedbackFormStep3Component } from '../feedback-form-step3/feedback-form-step3.component';

@Component({
  selector: 'app-feedback-form-step2',
  templateUrl: './feedback-form-step2.component.html',
  styleUrls: ['./feedback-form-step2.component.scss'],
})
export class FeedbackFormStep2Component  implements OnInit {

  constructor(private modalCtrl: ModalController, private _feedbackFormModals: FeedbackFormModalsService) {}

  ngOnInit() {}

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    this.openStep3Modal()
  }

  async openStep3Modal() {
    const newModalId = 'feedback-form-step-3'
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep3Component,
      id: newModalId,
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();
  }

}

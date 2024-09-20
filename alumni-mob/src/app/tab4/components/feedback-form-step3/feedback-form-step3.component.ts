import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FeedbackFormStep4Component } from '../feedback-form-step4/feedback-form-step4.component';

@Component({
  selector: 'app-feedback-form-step3',
  templateUrl: './feedback-form-step3.component.html',
  styleUrls: ['./feedback-form-step3.component.scss'],
})
export class FeedbackFormStep3Component  implements OnInit {

  constructor(private modalCtrl: ModalController, private _feedbackFormModals: FeedbackFormModalsService) {}

  ngOnInit() {}

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    this.openStep4Modal()
  }

  async openStep4Modal() {
    const newModalId = 'feedback-form-step-4'
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep4Component,
      id: newModalId,
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();
  }

}

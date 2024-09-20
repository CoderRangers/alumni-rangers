import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FeedbackFormStep5Component } from '../feedback-form-step5/feedback-form-step5.component';

@Component({
  selector: 'app-feedback-form-step4',
  templateUrl: './feedback-form-step4.component.html',
  styleUrls: ['./feedback-form-step4.component.scss'],
})
export class FeedbackFormStep4Component  implements OnInit {

  constructor(private modalCtrl: ModalController, private _feedbackFormModals: FeedbackFormModalsService) {}

  ngOnInit() {}

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    this.openStep5Modal()
  }

  async openStep5Modal() {
    const newModalId = 'feedback-form-step-5'
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep5Component,
      id: newModalId,
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();
  }

}

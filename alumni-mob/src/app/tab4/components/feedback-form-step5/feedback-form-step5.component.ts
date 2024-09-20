import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FeedbackFormStep6Component } from '../feedback-form-step6/feedback-form-step6.component';

@Component({
  selector: 'app-feedback-form-step5',
  templateUrl: './feedback-form-step5.component.html',
  styleUrls: ['./feedback-form-step5.component.scss'],
})
export class FeedbackFormStep5Component  implements OnInit {

  constructor(private modalCtrl: ModalController, private _feedbackFormModals: FeedbackFormModalsService) {}

  ngOnInit() {}

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    this.openStep6Modal()
  }

  async openStep6Modal() {
    const newModalId = 'feedback-form-step-6'
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep6Component,
      id: newModalId,
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();
  }
}

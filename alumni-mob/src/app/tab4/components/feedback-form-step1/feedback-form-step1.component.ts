import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormStep2Component } from '../feedback-form-step2/feedback-form-step2.component';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';

@Component({
  selector: 'app-feedback-form-step1',
  templateUrl: './feedback-form-step1.component.html',
  styleUrls: ['./feedback-form-step1.component.scss'],
})
export class FeedbackFormStep1Component  implements OnInit {

  constructor(private modalCtrl: ModalController, private _feedbackFormModals: FeedbackFormModalsService) {}

  ngOnInit() {}

  async openStep2Modal() {
    const newModalId = 'feedback-form-step-2'
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep2Component,
      id: newModalId,
    });
    this._feedbackFormModals.modalIds.push(newModalId)
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    /* if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    } */
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    this.openStep2Modal();
    // return this.modalCtrl.dismiss(null, 'confirm');
  }

}

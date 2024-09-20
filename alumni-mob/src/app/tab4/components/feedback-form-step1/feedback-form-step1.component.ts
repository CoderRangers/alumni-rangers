import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormStep2Component } from '../feedback-form-step2/feedback-form-step2.component';

@Component({
  selector: 'app-feedback-form-step1',
  templateUrl: './feedback-form-step1.component.html',
  styleUrls: ['./feedback-form-step1.component.scss'],
})
export class FeedbackFormStep1Component  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async openStep2Modal() {
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep2Component,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    /* if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    } */
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.openStep2Modal();
    // return this.modalCtrl.dismiss(null, 'confirm');
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';

@Component({
  selector: 'app-feedback-form-step6',
  templateUrl: './feedback-form-step6.component.html',
  styleUrls: ['./feedback-form-step6.component.scss'],
})
export class FeedbackFormStep6Component  implements OnInit {

  constructor(private modalCtrl: ModalController, private _feedbackFormModals: FeedbackFormModalsService) {}

  ngOnInit() {}

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  finish() {
    this._feedbackFormModals.modalIds.forEach((modalId) => {
      this.modalCtrl.dismiss(null, "", modalId);
    })
    this._feedbackFormModals.modalIds = [];
  }
}

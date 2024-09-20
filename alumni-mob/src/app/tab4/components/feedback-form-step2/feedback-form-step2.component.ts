import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';

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
    this._feedbackFormModals.modalIds.forEach((modalId) => {
      this.modalCtrl.dismiss(null, "", modalId);
    })
  }

}

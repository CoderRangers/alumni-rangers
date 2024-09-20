import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feedback-form-step2',
  templateUrl: './feedback-form-step2.component.html',
  styleUrls: ['./feedback-form-step2.component.scss'],
})
export class FeedbackFormStep2Component  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    // return this.modalCtrl.dismiss(null, 'confirm');
  }

}

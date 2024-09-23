import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feedback-form-header',
  templateUrl: './feedback-form-header.component.html',
  styleUrls: ['./feedback-form-header.component.scss'],
})
export class FeedbackFormHeaderComponent  implements OnInit {
  
  @Input()
  public isFirstStep: boolean = true;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancelOrPrevious() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}

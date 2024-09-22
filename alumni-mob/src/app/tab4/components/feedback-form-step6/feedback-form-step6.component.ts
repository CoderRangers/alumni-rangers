import { Component, OnInit } from '@angular/core';
import { CheckboxChangeEventDetail, ModalController, ToastController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { CompanyFeedbackType } from 'src/app/core/types/company-feedback/company-feedback.type';
import { IonCheckboxCustomEvent } from '@ionic/core';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-feedback-form-step6',
  templateUrl: './feedback-form-step6.component.html',
  styleUrls: ['./feedback-form-step6.component.scss'],
})
export class FeedbackFormStep6Component  implements OnInit {

  // Values filled by the previous modals, when creating this modal
  public companyFeedback!: CompanyFeedbackType

  public charterRespected: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private _feedbackFormModals: FeedbackFormModalsService,
    private _feedbackService: FeedbackService,
    private _toastController: ToastController,
  ) {}

  ngOnInit() {}

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async finish() {
    await this._feedbackService.create(this.companyFeedback)
    .pipe(take(1))
    .subscribe({
      next: (response: CompanyFeedbackType) => {
        this.showToast("Retour d'expérience envoyé et en attente de modération", 'success')
        this.closeForm()
      },
      error: (error: any) => {
        this.showToast(`Retour d'expérience non-envoyé. Erreur : ${error}`, 'danger')
      }
    })
  }

  async showToast(message: string, color: string) {
    const toast = await this._toastController.create({
      message,
      duration: 5000,
      color,
      position:'top'
    });
    toast.present();
  }

  closeForm() {
    this._feedbackFormModals.modalIds.forEach((modalId) => {
      this.modalCtrl.dismiss(null, "", modalId);
    })
    this._feedbackFormModals.modalIds = [];
  }

  toggleCharterRespect(event: IonCheckboxCustomEvent<CheckboxChangeEventDetail<any>>) {
    if(!this.charterRespected) {
      this.charterRespected = true
    } else {
      this.charterRespected = false
    }
  }
}

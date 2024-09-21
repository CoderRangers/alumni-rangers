import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FeedbackFormStep3Component } from '../feedback-form-step3/feedback-form-step3.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/core/services/company.service';
import { CompanyType, CompanyCategory } from 'src/app/core/types/company-feedback/company-feed.type';
import { CompanyRating } from 'src/app/core/types/company-feedback/company-rating.type';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-feedback-form-step2',
  templateUrl: './feedback-form-step2.component.html',
  styleUrls: ['./feedback-form-step2.component.scss'],
})
export class FeedbackFormStep2Component implements OnInit {
  public form: FormGroup = new FormGroup({})
  public companyName: string  = ""
  public companyTypes = Object.values(CompanyCategory);
  public companyRatings = Object.values(CompanyRating);

  constructor(
    private modalCtrl: ModalController,
    private _feedbackFormModals: FeedbackFormModalsService,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.companyName, Validators.required],
      type: ['', Validators.required],
      medianRating: ['', Validators.required],
      logo: ['']
    });
  }

  previous() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    if (this.form.valid) {
      this.createCompany();
    }
  }

  async createCompany() {
    const company: CompanyType = {
      name: this.form.value.name,
      type: this.form.value.type,
      medianRating: this.form.value.medianRating,
      logo: this.form.value.logo
    };

    try {
      await firstValueFrom(this.companyService.create(company));
      this.showToast('L\'entreprise a bien été créée en base de données', 'success');
      this.openStep3Modal(company);
    } catch (error) {
      this.showToast('Échec de la requête', 'danger');
    }
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      color
    });
    toast.present();
  }

  async openStep3Modal(company: CompanyType) {
    const newModalId = 'feedback-form-step-3';
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep3Component,
      id: newModalId,
      componentProps: {
        company: company
      }
    });
    this._feedbackFormModals.modalIds.push(newModalId);
    modal.present();
  }
}

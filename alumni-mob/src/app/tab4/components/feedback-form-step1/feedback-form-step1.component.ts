import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { FeedbackFormStep2Component } from '../feedback-form-step2/feedback-form-step2.component';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyType } from 'src/app/core/types/company-type';
import { take } from 'rxjs';
import { CompanyService } from 'src/app/core/services/company.service';

@Component({
  selector: 'app-feedback-form-step1',
  templateUrl: './feedback-form-step1.component.html',
  styleUrls: ['./feedback-form-step1.component.scss'],
})
export class FeedbackFormStep1Component implements OnInit {
  public companys!: Array<CompanyType>;
  public filteredComp!: Array<CompanyType>;
  public inputModel = '';

  constructor(
    private _feedbackFormModals: FeedbackFormModalsService,
    private modalCtrl: ModalController,
    private _companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this._companyService
      .findAll()
      .pipe(take(1))
      .subscribe({
        next: (response: any) => {
          this.companys = response;
          this.filteredComp = this.companys;
        },
      });
  }
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  onInput(ev: any) {
    const value = ev.target!.value;
    this.filteredComp = this.companys.filter((comp) =>
      comp.name.toLowerCase().includes(value.toLowerCase())
    );
  }
  async openStep2Modal() {
    const newModalId = 'feedback-form-step-2';
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep2Component,
      id: newModalId,
      componentProps: { // ici on passe une propriété qu'on peut récuperer par la prochaine modal
        companyName: this.inputModel //on la nomme companyName et on lui assigne ce que contient l'input de recherche === rendez-vous dans step2.ts
      }
    });
    this._feedbackFormModals.modalIds.push(newModalId);
    modal.present();
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    this.openStep2Modal();
  }
}


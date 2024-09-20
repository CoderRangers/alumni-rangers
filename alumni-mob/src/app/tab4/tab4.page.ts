import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CompanyCategory,
  CompanyType,
} from '../core/types/company-feedback/company-feed.type';
import { CompanyRating } from '../core/types/company-feedback/company-rating.type';
import { IonInput } from '@ionic/angular';
import { CompanyService } from '../core/services/company.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FeedbackFormStep1Component } from './components/feedback-form-step1/feedback-form-step1.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public companys!: Array<CompanyType>;
  public filteredComp!: Array<CompanyType>;
  public inputModel = '';

  constructor(
    private _companyService: CompanyService,
    private _router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
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

  selectCompany(companyId: string) {
    console.log(`click ${companyId}`);
    this._router.navigate(['tabs', 'tab4', 'company-feedbacks', companyId]);
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  async addFeedback() {
    const modal = await this.modalController.create({
      component: FeedbackFormStep1Component,
    });
    modal.present();
  }

  private populate(): CompanyType[] {
    return [
      {
        id: '1',
        name: 'Google',
        type: CompanyCategory.largeGroup,
        medianRating: CompanyRating.slightlyPositive,
        logo: '/assets/icon/logo-de-vecteur-google-chrome-passent-le-moteur-recherche-au-bichromate-potasse-du-pour-les-marques-célèbres-internationales-189260093.webp',
      },
      {
        id: '2',
        name: 'Apple',
        type: CompanyCategory.largeGroup,
        medianRating: CompanyRating.veryNegative,
        logo: '/assets/Le-logo-Apple-500x281.jpg',
      },
      // ... Ajoutez ici les 2 autres éléments
      {
        id: '3',
        name: 'Tesla',
        type: CompanyCategory.smallAndMediumCompany,
        medianRating: CompanyRating.neutral,
        logo: '/assets/icon/Logo-Tesla-noir.jpg',
      },
      {
        id: '4',
        name: 'Starbucks',
        type: CompanyCategory.startUp,
        medianRating: CompanyRating.veryPositive,
        logo: '/assets/icon/starbucks logo current.webp',
      },
    ];
  }
}

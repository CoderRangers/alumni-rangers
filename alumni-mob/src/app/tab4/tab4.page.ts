import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyCategory, CompanyType } from '../core/types/company-feedback/company-feed.type';
import { CompanyRating } from '../core/types/company-feedback/company-rating.type';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public companys!: Array<CompanyType>
  public filteredComp!: Array<CompanyType>
  public inputModel = '';

  constructor() { }

  ngOnInit() {
    this.companys = this.populate();
    this.filteredComp = this.companys    
  }

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  onInput(ev: any) {
    const value = ev.target!.value;
    this.filteredComp = this.companys.filter((comp) => comp.name.toLowerCase().includes(value.toLowerCase()));
  }

  onClick(companyId: string) {
    console.log(`click ${companyId}`);
  }

  private populate(): CompanyType[] {
    return [
      {
        id: '1',
        name: 'Google',
        type: CompanyCategory.largeGroup,
        medianRating: CompanyRating.slightlyPositive,
        logo: ''
      },
      {
        id: '2',
        name: 'Apple',
        type: CompanyCategory.largeGroup,
        medianRating: CompanyRating.veryNegative
      },
      // ... Ajoutez ici les 2 autres éléments
      {
        id: '3',
        name: 'Tesla',
        type: CompanyCategory.smallAndMediumCompany,
        medianRating: CompanyRating.neutral,
        logo: 'https://example.com/tesla-logo.png'
      },
      {
        id: '4',
        name: 'Starbucks',
        type: CompanyCategory.startUp,
        medianRating: CompanyRating.veryPositive
      }
    ];
  }

/*   private populate(): void {
      let company = {
        id: '1', 
        name: 'Cap Gemini', 
        companyType: 'Grand Groupe',
        medianRating: 'neutre',
        logo: ''
      }
      this.companys.push(company);
      company = {
        id: '2', 
        name: 'CGI', 
        companyType: 'Grand Groupe',
        medianRating: 'neutre',
        logo: ''
      }
      this.companys.push(company);
      company = {
        id: '3', 
        name: 'Chez coco', 
        companyType: 'start up',
        medianRating: 'Plutot positif', 
        logo: ''
      }
      this.companys.push(company); 
  } */

}

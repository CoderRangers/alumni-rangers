import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { FeedbackFormStep2Component } from '../feedback-form-step2/feedback-form-step2.component';
import { FeedbackFormModalsService } from '../../services/feedback-form-modals.service';
import { CompanyType } from 'src/app/core/types/company-feedback/company-feed.type';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { CompanyService } from 'src/app/core/services/company.service';
import { FeedbackFormStep3Component } from '../feedback-form-step3/feedback-form-step3.component';
import { RefreshCompaniesService } from '../../services/refresh-company.service';
import { LoginService } from 'src/app/login/services/login.service';
import { InternService } from 'src/app/core/services/intern.service';
import { TokenInfoType } from 'src/app/core/types/login/token-type';
import { InternType } from 'src/app/core/types/intern-type';
import { InternTransformer } from 'src/app/core/types/intern/intern-transformer';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-feedback-form-step1',
  templateUrl: './feedback-form-step1.component.html',
  styleUrls: ['./feedback-form-step1.component.scss'],
})
export class FeedbackFormStep1Component implements OnInit {
  public companys!: Array<CompanyType>;
  public filteredComp!: Array<CompanyType>;
  public intern :InternType[] = [];
  public inputModel = '';
  public selectedCompany: any = null;
  public nextButtonColor: string = 'medium'
  public isChecked:Boolean = false;
  constructor(
    private _feedbackFormModals: FeedbackFormModalsService,
    private modalCtrl: ModalController,
    private _companyService: CompanyService,
    private _companyRefreshService: RefreshCompaniesService,
    private _internService: InternService,
    private _storageService: StorageService
    
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

    this._companyRefreshService.companies$.subscribe(companies => {
      this.companys = companies;
      this.filteredComp = this.companys;
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
  async openStep3Modal() {
    const newModalId = 'feedback-form-step-3';
    const modal = await this.modalCtrl.create({
      component: FeedbackFormStep3Component,
      id: newModalId,
      componentProps: { 
        companyName: this.inputModel,
        internName: this.intern[0].firstname,
        interLastname:this.intern[0].lastname,
        internOccupation: this.intern[0].occupation,
        internCompany:this.intern[0].company.name
      }
    });
    this._feedbackFormModals.modalIds.push(newModalId);
    modal.present();
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  next() {
    if(this.nextButtonColor == 'medium'){
      this.openStep2Modal();
      this.cleanInput();

    }else{
      this.openStep3Modal();
      this.cleanInput()
    }
    
  }
  cleanInput(){
    this.inputModel = ""
    this.nextButtonColor = "medium"
  }
  selectCompany(company: any) {
    this.inputModel = company.name;
    this.selectedCompany = company;
    this.nextButtonColor = 'primary';
  }
  refreshCompany() {
    this._companyService.findAll().pipe(take(1)).subscribe(companies => {
      this._companyRefreshService.refreshCompanies(companies);
    });
  }
  retrieveInternId():string{
    const token = this._storageService.retrieve("internId");
    console.log(token);
    return token
  }

  getIntern():Array<InternType>{
    const id :string = this.retrieveInternId();
    this._internService.findOne(id).subscribe({
      next: (intern: InternType) => {
        this.intern[0] = intern
        console.log(`intern: ${JSON.stringify(intern)}`)
        console.log(this.intern[0].firstname);
      },
      error: (error: any) => {},
      complete: () => {}
    });
  return this.intern
  }
  
}



import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CompanyType } from 'src/app/core/types/company-feedback/company-feed.type';

@Injectable({
  providedIn: 'root'
})
export class RefreshCompaniesService {
  private companiesSubject = new BehaviorSubject<Array<CompanyType>>([]);
  public companies$: Observable<Array<CompanyType>> = this.companiesSubject.asObservable();

  constructor() {}

  refreshCompanies(companies: Array<CompanyType>) {
    this.companiesSubject.next(companies);
  }
}
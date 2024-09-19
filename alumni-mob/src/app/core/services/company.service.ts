import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompanyType } from '../types/company-feedback/company-feed.type';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly URI = 'http://localhost:3000/company';

  //private _company!: Observable <Array<CompanyType>>

  constructor(
    private _httpClient: HttpClient
  ) { }

  public findAll(): Observable<Array<CompanyType>> {
    return this._httpClient.get<Array<CompanyType>>(this.URI)
  }

  public findOne(id: string): Observable<CompanyType> {
    return this._httpClient.get<CompanyType>(this.URI+'/'+id)
  }

  public create(company: CompanyType): Observable<CompanyType> {
    return this._httpClient.post<CompanyType>(this.URI, company)
  }

  public update(id: string, data: CompanyType): Observable<CompanyType> {
    return this._httpClient.put<CompanyType>(this.URI+'/'+id, data);
  }

  public delete(id: string): Observable<CompanyType> {
    return this._httpClient.delete<CompanyType>(this.URI+'/'+id);
  }
}

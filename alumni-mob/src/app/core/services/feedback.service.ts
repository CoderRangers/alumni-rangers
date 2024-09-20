import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyFeedbackType } from '../types/company-feedback/company-feedback.type';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly URI = 'http://localhost:3000/feedback';
  private _indexOfLastDisplayedFeedback: number = 0;

  constructor(
    private _httpClient: HttpClient
  ) { }

  public findAll(): Observable<Array<CompanyFeedbackType>> {
    return this._httpClient.get<Array<CompanyFeedbackType>>(this.URI);
  }

  public findOne(id: string): Observable<CompanyFeedbackType> {
    return this._httpClient.get<CompanyFeedbackType>(this.URI+'/'+id);
  }

  public findFeedbacksOfOneCompany(id:string): Observable<CompanyFeedbackType> {
    return this._httpClient.get<CompanyFeedbackType>(this.URI+'/company/'+id);
  }

  public create(feedback: CompanyFeedbackType): Observable<CompanyFeedbackType> {
    return this._httpClient.post<CompanyFeedbackType>(this.URI, feedback);
  }

  public update(id: string, data: CompanyFeedbackType): Observable<CompanyFeedbackType> {
    return this._httpClient.put<CompanyFeedbackType>(this.URI+'/'+id, data);
  }

  public delete(id: string): Observable<CompanyFeedbackType> {
    return this._httpClient.delete<CompanyFeedbackType>(this.URI+'/'+id);
  }

  public findNext(id: string): Observable<Array<CompanyFeedbackType>> {
    let index = this._indexOfLastDisplayedFeedback;
    this._indexOfLastDisplayedFeedback++;
    return this._httpClient.get<Array<CompanyFeedbackType>>(this.URI + `/company/${id}/next/${index}`);
  }

  public get indexOfLastDisplayedFeedback(): number {
    return this._indexOfLastDisplayedFeedback;
  }
  public set indexOfLastDisplayedFeedback(value: number) {
    this._indexOfLastDisplayedFeedback = value;
  }
}

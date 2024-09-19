import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompanyType } from '../types/company-feedback/company-feed.type';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly URI = 'http://localhost:3000/company'

  private _posts!: Observable <Array<CompanyType>>

  constructor(
    private _httpClient: HttpClient
  ) { }

  findAll(): Observable<Array<CompanyType>> {
    return this._httpClient.get<Array<CompanyType>>(this.URI)
  }

  public findOne(id: string): Observable<CompanyType> {
    return this._httpClient.get<CompanyType>(this.URI+'/'+id)
/*     .pipe(
      map((intern: any) => {
        return plainToInstance(InternType, intern)
      })
    ) */
  }
}

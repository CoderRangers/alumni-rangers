import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';
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

/**In create() we use throwError to rise an exception and save the type returned
 * Because if the company exists already, the type returned is different Observable<null>
 * throwError preserve the same type Observable<CompanyType>
 * couldn't fix it adding a pipe operator |
 */
  public create(company: CompanyType): Observable<CompanyType> {
    console.log('Creating company:', company);

    return this.findAll().pipe(
      switchMap(companies => {
        const existingCompany = companies.find(c => c.name.toLowerCase() === company.name.toLowerCase());

        if (existingCompany) {
          console.error('Company with the same name already exists:', existingCompany);
          return throwError(() => new Error('Company with the same name already exists'));
        } else {
          return this._httpClient.post<CompanyType>(this.URI, company).pipe(
            tap(response => console.log('Company created:', response)),
            catchError(error => {
              console.error('Error creating company:', error);
              return throwError(() => error);
            })
          );
        }
      })
    );
  }

  public update(id: string, data: CompanyType): Observable<CompanyType> {
    return this._httpClient.put<CompanyType>(this.URI+'/'+id, data);
  }

  public delete(id: string): Observable<CompanyType> {
    return this._httpClient.delete<CompanyType>(this.URI+'/'+id);
  }
}

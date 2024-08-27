import { Injectable } from '@angular/core';
//import { InternType } from '../types/intern/intern-type';
import { InternTransformer } from '../types/intern/intern-transformer'
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { plainToClass, plainToInstance } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  private _interns: Array<InternTransformer> = []
  private readonly URI: string = 'http://localhost:3000/api/v1/intern'

  // constructor utilisé seulement pour de l'injection de dépendances. 
  constructor(
    private _httpClient: HttpClient // injection du service HttpCLient dans le service InternService
  ) {}

  public findAll(): Observable<Array<InternTransformer>> {
    return this._httpClient.get<Array<InternTransformer>>(this.URI)
      .pipe(
        map((interns: Array<any>) => {
          return interns.map((intern: any) => {
            return plainToInstance(InternTransformer, intern)
          })
        })
      )
  }

  public findOne(id: string): Observable<InternTransformer> {
    return this._httpClient.get<InternTransformer>(this.URI+'/'+id)
    .pipe(
      map((intern: any) => {
        return plainToInstance(InternTransformer, intern)
      })
    )
  }

  public companyFilter(comp: string): Array<InternTransformer> {
    throw new Error(`Not implemented yet`)
  }
}

import { Injectable } from '@angular/core';
//import { InternType } from '../types/intern/intern-type';
import { InternTransformer } from '../types/intern/intern-transformer'
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { plainToClass, plainToInstance } from 'class-transformer';
import { InternType } from '../types/intern/intern-type';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  private _interns: Array<InternType> = []
  private readonly URI: string = 'http://localhost:3000/api/v1/intern'
  private _intern: InternType | null = null;

  // constructor utilisé seulement pour de l'injection de dépendances. 
  constructor(
    private _httpClient: HttpClient // injection du service HttpCLient dans le service InternService
  ) {}

  public findAll(): Observable<Array<InternType>> {
    return this._httpClient.get<Array<InternType>>(this.URI)
      /* .pipe(
        map((interns: Array<any>) => {
          return interns.map((intern: any) => {
            return plainToInstance(InternTransformer, intern)
          })
        })
      ) */
  }

  public findOne(id: string): Observable<InternType> {
    return this._httpClient.get<InternType>(this.URI+'/'+id)
/*     .pipe(
      map((intern: any) => {
        return plainToInstance(InternType, intern)
      })
    ) */
  }

  public companyFilter(comp: string): Array<InternTransformer> {
    throw new Error(`Not implemented yet`)
  }

  set intern(intern: InternType) {
    this._intern = intern
  }

  get intern(): InternType | null {
    return this._intern
  }
}

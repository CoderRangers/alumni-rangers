import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(credentials: any): Observable<HttpResponse<any>> {
    if (credentials.login === 'admin' && credentials.password === 'admin') {
      // return 200 ok
      return of(
        new HttpResponse<any>({
          status: 200,
          body: { token: '66c592ebd4134255d8c7041a.b.c' }
        })
      )
    }
    else {
      if (credentials.login === 'monica' && credentials.password === 'admin') {
        // Ici retourner un 200 ok
        return of(
          new HttpResponse<any>({
            status: 200,
            body: { token: '66c879296aafaa4e3f4cb1c1.b.c' }
          })
        )
      }
      // Return response 403 Forbiden
      return of(
        new HttpResponse<any>({
          status: 403,
          body: { message: `Echec de l'identification` }
        })
      )
    }
  }
}
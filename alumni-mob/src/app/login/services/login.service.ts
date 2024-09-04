import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(credentials: any): Observable<HttpResponse<any>> {
    if (credentials.login === 'anthoine' && credentials.password === 'admin') {
      // return 200 ok
      return of(
        new HttpResponse<any>({
          status: 200,
          body: { token: '66cee5f6ad0c7c5a1b396afb.b.c' }
        })
      )
    }
    else {
      if (credentials.login === 'cyril' && credentials.password === 'admin') {
        // Ici retourner un 200 ok
        return of(
          new HttpResponse<any>({
            status: 200,
            body: { token: '66cee252ad0c7c5a1b396af3.b.c' }
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
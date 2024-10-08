import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, take } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { LoginType } from 'src/app/core/types/login/login-type';
import { TokenInfoType, TokenType } from 'src/app/core/types/login/token-type';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/auth'; 
  constructor(
    private _httpClient: HttpClient,
    private _storageService: StorageService
  ) {}

  doLogin(credentials: any): Observable<HttpResponse<any>> {
    if (credentials.login === 'anthoine' && credentials.password === 'admin') {
      // return 200 ok
      return of(
        new HttpResponse<any>({
          status: 200,
          body: { token: '66cee5f6ad0c7c5a1b396afb.b.c' },
        })
      );
    } else {
      if (credentials.login === 'cyril' && credentials.password === 'admin') {
        // Ici retourner un 200 ok
        return of(
          new HttpResponse<any>({
            status: 200,
            body: { token: '66cee252ad0c7c5a1b396af3.b.c' },
          })
        );
      }
      // Return response 403 Forbiden
      return of(
        new HttpResponse<any>({
          status: 403,
          body: { message: `Echec de l'identification` },
        })
      );
    }
  }

  // login(credentials: any):Observable<string> {
  //   // Envoie les informations d'identification à la gateway
  //   return this._httpClient.post<string>(
  //     `${this.apiUrl}/login`,
  //     credentials
  //   );
  // }

  login(credentials: LoginType):Observable<TokenType> {
    // Envoie les informations d'identification à la gateway
    return this._httpClient.post<TokenType>(
      `${this.apiUrl}/login`,
      credentials
    );
  }

  tokenInfo(): Observable<TokenInfoType> {
    const token: TokenType = this._storageService.retrieve('auth')
    return this._httpClient.post<any>(`${this.apiUrl}/info`, { access_token: token })
  }
}

// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private apiUrl = 'https://votre-api.com'; // Remplacez par votre URL d'API
//   private isLoggedInSubject = new BehaviorSubject<boolean>(false);

//   constructor(private http: HttpClient, private router: Router) {}

//   logout() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     // this.isLoggedInSubject.next(false);
//     this.router.navigate(['/login']);
//   }

//   isLoggedIn() {
//     // return this.isLoggedInSubject.asObservable();
//   }

//   getToken() {
//     return localStorage.getItem('token');
//   }

//   getUserId() {
//     return localStorage.getItem('userId');
//   }
// }

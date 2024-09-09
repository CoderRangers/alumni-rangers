import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly _gatewayBaseURI = 'http://localhost:3000';

  constructor(
    private _storageService: StorageService,
    private _router: Router,
    private _httpClient: HttpClient
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const token = this._storageService.retrieve('auth');
    let isTokenValid: boolean = false;
    if (token) {
      this._httpClient
        .get<boolean>(`${this._gatewayBaseURI}/auth/token-check`, token)
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            response ? (isTokenValid = true) : (isTokenValid = false);
          },
        });
    }
    if (isTokenValid) {
      return true;
    } else {
      this._router.navigate(['/', 'login']);
      return false;
    }
  }
}

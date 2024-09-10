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
import { map, take } from 'rxjs';
import { TokenType } from '../types/login/token-type';

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
    if (!token) {
      this._router.navigateByUrl('/login');
      return false
    }

    return this._httpClient
        .post<boolean>(`${this._gatewayBaseURI}/auth/token-check`, { access_token: token })
        .pipe(take(1), map((response: any) => {return response}))
  }
}

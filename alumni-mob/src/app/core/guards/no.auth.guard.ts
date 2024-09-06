import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor (
    private _storageService: StorageService,
    private _router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this._storageService.retrieve('auth') === null)
      // TODO: check that the value corresponding to 'auth' in localStorage is an invalid JWT or there is no JWT
      return true
    
    this._router.navigate(['/'])
    return false
  }
}

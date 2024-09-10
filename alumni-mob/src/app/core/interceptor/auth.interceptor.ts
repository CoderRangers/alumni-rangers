import { HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req : HttpRequest<any> , next : HttpHandlerFn) => {

    const localStorage = inject(StorageService);
    const token = localStorage.retrieve('auth');

    if(!token) {
      return next(req)
    } 
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    })
  
    const newReq = req.clone({
      headers
    })
  
  return next(newReq)
};

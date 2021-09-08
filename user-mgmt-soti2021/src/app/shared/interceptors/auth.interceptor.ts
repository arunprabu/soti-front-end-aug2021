import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // get the token from sessionStorage
    const bearerToken = sessionStorage.getItem('authToken');

    // clone the http req 
    // update the req header with the bearer token  
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + bearerToken
      }
    });
    
    return next.handle(request);
  }
}

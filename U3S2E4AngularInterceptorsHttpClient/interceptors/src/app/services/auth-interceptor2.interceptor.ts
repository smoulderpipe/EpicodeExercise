import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEventType,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable()
export class AuthInterceptor2Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    // console.log("Auth Interceptor called!")
    // return next.handle(request);
    const modifiedReq = request.clone({ headers: request.headers.append('auth', 'abcxyz')});
    // return next.handle(modifiedReq);
    return next.handle(modifiedReq).pipe(tap((event) => {
      if (event.type === HttpEventType.Response){
        console.log("Response has arrived. Response data: ");
        console.log(event.body);
      }
    }));
  }
}

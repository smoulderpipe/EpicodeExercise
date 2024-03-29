import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ErrorPrinterInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request instanceof HttpRequest) {
      console.log("Auth Interceptor called for request:", request.url);
    }
    return next.handle(request);
  }
}

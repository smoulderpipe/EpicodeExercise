import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    constructor() { }
  
    isLoggedIn(): Observable<boolean> {
      // Simulazione di un controllo di autenticazione
      const isLoggedIn = Math.random() > 0.5;
      return of(isLoggedIn);
    }
  
    canActivate(): Observable<boolean> {
      return this.isLoggedIn();
    }
  }
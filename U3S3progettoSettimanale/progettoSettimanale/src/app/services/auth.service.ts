import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseURL = 'http://localhost:3000';
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('access_token'));
  token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http.get<any>(`${this.baseURL}/users?username=${username}&password=${password}`).pipe(
      map((users: any[]) => {
        if (users && users.length > 0) {
          const token = this.generateToken(); 
          localStorage.setItem('access_token', token);
          this.tokenSubject.next(token);
  
          // Trova l'utente corrispondente alle credenziali inserite
          const loggedInUser = users.find(user => user.username === username);
          if (loggedInUser) {
            const loggedInUsername = loggedInUser.username;
            console.log('Login effettuato con successo!');
            console.log(token);
            console.log('Username:', loggedInUsername);
            return loggedInUsername;
          } else {
            console.error('Credenziali non valide. Login fallito.');
            throw new Error('Credenziali non valide. Login fallito.');
          }
        } else {
          console.error('Credenziali non valide. Login fallito.');
          throw new Error('Credenziali non valide. Login fallito.');
        }
      }),
      catchError((error) => {
        console.error('Errore durante il login:', error);
        return throwError(error);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.tokenSubject.next(null);
  }

  private generateToken(): string {
    return 'mocked_token'; // In questa implementazione di esempio, viene restituito un token fittizio
  }

  isLoggedIn(): Observable<boolean> {
    return this.tokenSubject.pipe(
      map(token => !!token) // Converte il valore del token in booleano
    );
  }

  
  
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseURL = 'http://localhost:3000';
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('access_token'));
  token$ = this.tokenSubject.asObservable();
  private loggedUserId: number | null = null;

  constructor(private http: HttpClient) {}

  addToFavorites(userId: number, movieId: number): Observable<any> {
    const favoriteMovieData = {
      userId: userId,
      movieId: movieId
    };

    return this.http.post<any>(`${this.baseURL}/favorites`, favoriteMovieData).pipe(
      map((response) => {
        console.log('Film aggiunto ai preferiti con successo!', response);
        return response; // Ritorna la risposta dell'API se necessario
      }),
      catchError((error) => {
        console.error('Errore durante l\'aggiunta ai preferiti:', error);
        return throwError(error);
      })
    );
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseURL}/movies-toprated`).pipe(
      catchError((error) => {
        console.error('Errore durante il recupero dei film top rated:', error);
        return throwError(error);
      })
    );
  }

  // Metodo per ottenere i film popular
  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseURL}/movies-popular`).pipe(
      catchError((error) => {
        console.error('Errore durante il recupero dei film popular:', error);
        return throwError(error);
      })
    );
  }
  

  getFavoriteMovies(userId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseURL}/favorites?userId=${userId}`).pipe(
      map((movies: Movie[]) => {
        console.log('Film preferiti dell\'utente recuperati con successo!', movies);
        return movies;
      }),
      catchError((error) => {
        console.error('Errore durante il recupero dei film preferiti dell\'utente:', error);
        return throwError(error);
      })
    );
  }


  login(username: string, password: string): Observable<string> {
    return this.http
      .get<any>(`${this.baseURL}/users?username=${username}&password=${password}`)
      .pipe(
        map((users: any[]) => {
          if (users && users.length > 0) {
            const token = this.generateToken();
            localStorage.setItem('access_token', token);
            this.tokenSubject.next(token);

            // Find user and extract email
            const loggedInUser = users.find((user) => user.username === username);
            if (loggedInUser) {
              this.loggedUserId = loggedInUser.id;
              localStorage.setItem('user', JSON.stringify(loggedInUser));
              console.log('Login effettuato con successo!');
              console.log(token);
              console.log('Username:', loggedInUser.username);
              console.log('ID', loggedInUser.id)
              console.log('Email:', loggedInUser.email); // Assuming 'email' exists in user object
              
              // Option 1: Return email directly (if needed)
              // return loggedInUser.email;

              // Option 2: Continue returning username (unchanged)
              return loggedInUser.username;
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
    localStorage.removeItem('user');
    this.tokenSubject.next(null);
    this.loggedUserId = null;
  }

  private generateToken(): string {
    return 'mocked_token'; // In questa implementazione di esempio, viene restituito un token fittizio
  }

  isLoggedIn(): Observable<boolean> {
    return this.tokenSubject.pipe(map((token) => !!token));
  }

  getUserId(): number | null {
    return this.loggedUserId;
  }

  getUserEmail(): Observable<string | null> {
    if (this.loggedUserId) {
      return of(this.getUserDataById(this.loggedUserId)?.email ?? null); // Use nullish coalescing for email
    } else {
      return of(null);
    }
  }

  getUserDataById(id: number): any {
    // Implement logic to retrieve user data based on ID
    // Replace this with your actual implementation based on your data source (API or local storage)
    console.warn('getUserDataById not implemented yet. Modify this to retrieve user data based on ID');
    return null;
  }

  
}
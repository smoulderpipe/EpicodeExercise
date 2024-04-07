import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userEmail: string | null = null;
  username: string | null = null;
  favoriteMovies: Movie[] = []; 

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.userEmail = user.email;
      this.username = user.username;

      // Recupera i film preferiti dell'utente
      this.authService.getFavoriteMovies(user.id).subscribe(
        (movies: Movie[]) => {
          this.favoriteMovies = movies;
        },
        (error) => {
          console.error('Errore durante il recupero dei film preferiti:', error);
        }
      );
    }
  }
}
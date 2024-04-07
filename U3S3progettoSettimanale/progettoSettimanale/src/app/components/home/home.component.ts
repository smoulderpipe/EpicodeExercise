import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private popularMoviesBaseUrl = 'http://localhost:3000/movies-popular';
  private topRatedMoviesBaseUrl = 'http://localhost:3000/movies-toprated';
  imageUrl: string = 'https://image.tmdb.org/t/p/w500';
  movies_popular: Movie[] = [];
  movies_toprated: Movie[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Movie[]>(`${this.popularMoviesBaseUrl}`).subscribe((data: Movie[]) => {
      this.movies_popular = data;
    });

    this.http.get<Movie[]>(`${this.topRatedMoviesBaseUrl}`).subscribe((data: Movie[]) => {
      this.movies_toprated = data;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(private http: HttpClient) {}

  getMovies(): unknown {
    return [
      'The Shawshank Redemption',
      'The Godfather',
      'The Dark Knight',
      'The Godfather: Part II',
      'The Lord of the Rings: The Return of the King',
    ];
  }

  getMovieData(): Observable<unknown> {
    const url = `https://api.themoviedb.org/3/movie/343611?api_key=<api-key>`;
    return this.http.get(url);
  }
}

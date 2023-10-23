import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { lastValueFrom } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movieData: Movie | undefined;
  url: string = '';

  constructor(private tmdbService: TmdbService) {}

  async ngOnInit() {
    this.movieData = await lastValueFrom(this.tmdbService.getMovie());
    this.url = `url('https://image.tmdb.org/t/p/w500${this.movieData.poster_path}') no-repeat`;
  }
}

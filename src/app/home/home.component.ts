import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movieData: unknown;

  constructor(private tmdbService: TmdbService) { }

  async ngOnInit() {
    this.movieData = await lastValueFrom(this.tmdbService.getMovieData());
  }
}

import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { lastValueFrom } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';

import { MenuItem } from 'primeng/api';
interface City {
  name?: string;
  code?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movieData: Movie | undefined;
  
  cities: City[] = [];
  selectedCity: City | undefined;

  constructor(public tmdbService: TmdbService) {}

  async ngOnInit() {
    this.movieData = await lastValueFrom(this.tmdbService.getMovie());

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.selectedCity = this.cities[0];
  }
}

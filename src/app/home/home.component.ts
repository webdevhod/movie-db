import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { lastValueFrom } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

import { MenuItem } from "primeng/api";
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
  url: string = '';
  cities: City[] = [];
  selectedCity: City | undefined;
  // items: MenuItem[] = [];

  constructor(private tmdbService: TmdbService) {}

  async ngOnInit() {
    this.movieData = await lastValueFrom(this.tmdbService.getMovie());
    this.url = `url('https://image.tmdb.org/t/p/w500${this.movieData.poster_path}') no-repeat`;
  
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ];
    this.selectedCity = this.cities[0];
    // this.items = [
    //   {label: 'Home', icon: 'pi pi-fw pi-home'},
    //   {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    //   {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    //   {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    //   {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    // ];

  }
}

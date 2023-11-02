export interface DiscoverMovieResult {
    id: number;
    title: string;
    adult: boolean;
    video: boolean;
    backdrop_path: string;
    genre_ids: [number];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
  }
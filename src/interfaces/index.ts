interface IMedia {
  adult: boolean;
  backdropImage: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  overview: string;
  popularity: number;
  posterImage: string;
  voteAverage: number;
  voteCount: number;
}

interface IMediaResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IMovieResponse extends IMediaResponse {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface IMovie extends IMedia {
  title: string;
  releaseDate: string;
  originalTitle: string;
  video: boolean;
  isFavorite: boolean;
}

export type TimeWindow = "week" | "day";

export interface IMovieDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetails {
  adult: boolean;
  backdropImage: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterImage: string;
  productionCompanies: {
    id: number;
    logoPath: string;
    name: string;
  }[];
  productionCountries: {
    iso_3166_1: string;
    name: string;
  }[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  voteAverage: number;
  voteCount: number;
  isFavorite: boolean;
}

export interface IStoredFavoriteMovie {
  id: number;
  posterImage: string;
}

export interface IAddRemoveFavoriteResponse {
  favorite: IStoredFavoriteMovie[];
  action: "add" | "remove";
}

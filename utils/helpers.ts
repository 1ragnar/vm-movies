import {
  IMovie,
  IMovieDetails,
  IMovieDetailsResponse,
  IMovieResponse,
} from "../src/interfaces";
import { addRemoveFavorite, isFavorite } from "./localStorage";

export const getMoviesFromResponse = (
  moviesResponse: IMovieResponse[]
): IMovie[] => {
  let movies: IMovie[] = moviesResponse
    .filter((item) => item.poster_path)
    .map((item) => {
      return {
        adult: item.adult,
        backdropImage:
          process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL + item.backdrop_path,
        genreIds: item.genre_ids.map((id) => +id),
        id: item.id,
        originalLanguage: item.original_language,
        title: item.title,
        overview: item.overview,
        popularity: item.popularity,
        posterImage:
          process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL + item.poster_path,
        releaseDate: convertDateString(item.release_date),
        originalTitle: item.original_title,
        video: item.video,
        voteAverage: item.vote_average,
        voteCount: item.vote_count,
        isFavorite: false,
      };
    });

  return movies;
};

export const getMovieDetailsFromResponse = (
  movieDetailsResponse: IMovieDetailsResponse
): IMovieDetails => {
  let movieDetails: IMovieDetails = {
    productionCompanies: movieDetailsResponse.production_companies.map(
      (productionCompany) => {
        return {
          id: productionCompany.id,
          logoPath:
            process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL +
            productionCompany.logo_path,
          name: productionCompany.name,
        };
      }
    ),
    productionCountries: movieDetailsResponse.production_countries,
    releaseDate: convertDateString(movieDetailsResponse.release_date),
    adult: movieDetailsResponse.adult,
    backdropImage:
      process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL +
      movieDetailsResponse.backdrop_path,
    originalLanguage: movieDetailsResponse.original_language,
    posterImage:
      process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL +
      movieDetailsResponse.poster_path,
    voteAverage: movieDetailsResponse.vote_average,
    voteCount: movieDetailsResponse.vote_count,
    originalTitle: movieDetailsResponse.original_title,
    budget: movieDetailsResponse.budget,
    genres: movieDetailsResponse.genres,
    id: movieDetailsResponse.id,
    overview: movieDetailsResponse.overview,
    popularity: movieDetailsResponse.popularity,
    revenue: movieDetailsResponse.revenue,
    runtime: movieDetailsResponse.runtime,
    status: movieDetailsResponse.status,
    tagline: movieDetailsResponse.tagline,
    title: movieDetailsResponse.title,
    isFavorite: isFavorite(movieDetailsResponse.id), //always getting movie details on client side; local storage is available
  };

  return movieDetails;
};

export const countryToFlag = (isoCode) =>
  isoCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));

export const convertDateString = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

export const updateListFavorite = (setFunction, movie: IMovie) => {
  let response = addRemoveFavorite({
    id: movie.id,
    posterImage: movie.posterImage,
  });
  setFunction((initialState) => {
    return {
      ...initialState,
      movies: initialState.movies.map((item) => {
        if (item.id === movie.id) {
          return { ...item, isFavorite: response.action === "add" };
        } else {
          return { ...item };
        }
      }),
    };
  });
};

export const updateMovieListFavorites = (setFunction) => {
  setFunction((initialState) => {
    return {
      ...initialState,
      movies: initialState.movies.map((movie) => {
        return { ...movie, isFavorite: isFavorite(movie.id) };
      }),
    };
  });
};

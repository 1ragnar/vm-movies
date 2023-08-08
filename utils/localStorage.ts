import {
  IAddRemoveFavoriteResponse,
  IStoredFavoriteMovie,
} from "../src/interfaces";

export const saveToLocalStorage = (key: string, data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const addRemoveFavorite = (
  movie: IStoredFavoriteMovie
): IAddRemoveFavoriteResponse => {
  const storedFavoriteMovies: IStoredFavoriteMovie[] =
    getFromLocalStorage("favoriteMovies") ?? [];
  let updatedFavoriteMovies = [...storedFavoriteMovies];
  //movie do not exist in favorite movies; add it
  if (
    !storedFavoriteMovies.some(
      (storedMovie: IStoredFavoriteMovie) => storedMovie.id === movie.id
    )
  ) {
    updatedFavoriteMovies.push({
      id: movie.id,
      posterImage: movie.posterImage,
    });
    saveToLocalStorage("favoriteMovies", updatedFavoriteMovies);

    return { favorite: updatedFavoriteMovies, action: "add" };
  } else {
    //move exist; remove it
    updatedFavoriteMovies = storedFavoriteMovies.filter(
      (storedMovie: IStoredFavoriteMovie) => movie.id !== storedMovie.id
    );
    saveToLocalStorage("favoriteMovies", updatedFavoriteMovies);

    return { favorite: updatedFavoriteMovies, action: "remove" };
  }
};

export const isFavorite = (movieId: number) => {
  const storedFavoriteMovies = getFromLocalStorage("favoriteMovies");

  return storedFavoriteMovies.some(
    (movie: IStoredFavoriteMovie) => movie.id === movieId
  );
};

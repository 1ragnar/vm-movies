import React, { useEffect, useState } from "react";
import { CustomList } from "../src/components/List/CustomList";
import { IMovie } from "../src/interfaces";
import { PageRootContainer } from "../styles/pages";
import { addRemoveFavorite, getFromLocalStorage } from "../utils/localStorage";

export type IFavoritesProps = {};

const Favorites: React.FC<IFavoritesProps> = ({}) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    let favMovies = getFromLocalStorage("favoriteMovies");
    setFavoriteMovies(
      favMovies.map((item) => {
        return { ...item, isFavorite: true };
      })
    );
  };

  const updateFavoriteList = (movie) => {
    addRemoveFavorite({
      id: movie.id,
      posterImage: movie.posterImage,
    });
    setFavoriteMovies((initialState) =>
      initialState.filter((item) => item.id !== movie.id)
    );
  };

  return (
    <PageRootContainer>
      <CustomList
        items={favoriteMovies}
        onLoadNextPage={() => {}}
        title={`Favorite movies`}
        onFavoriteClick={(movie) => updateFavoriteList(movie)}
      />
    </PageRootContainer>
  );
};

export default Favorites;

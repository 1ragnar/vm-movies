import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { CustomList } from "../src/components/List/CustomList";
import { IMovie } from "../src/interfaces";
import {
  fetchAndSetMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../src/repositories/movies";
import { PageRootContainer } from "../styles/pages";
import { updateListFavorite, updateMovieListFavorites } from "../utils/helpers";

type Props = {
  preloadedMovies: {
    topRated: IMovie[];
    popular: IMovie[];
    upcoming: IMovie[];
  };
};

const Home = ({ preloadedMovies }: Props) => {
  const [topRated, setTopRated] = useState<{
    page: number;
    movies: IMovie[];
  }>({
    page: 1,
    movies: preloadedMovies.topRated,
  });

  const [popular, setPopular] = useState<{
    page: number;
    movies: IMovie[];
  }>({
    page: 1,
    movies: preloadedMovies.popular,
  });

  const [upcoming, setUpcoming] = useState<{
    page: number;
    movies: IMovie[];
  }>({
    page: 1,
    movies: preloadedMovies.upcoming,
  });

  useEffect(() => {
    updateMovieListFavorites(setTopRated);
    updateMovieListFavorites(setPopular);
    updateMovieListFavorites(setUpcoming);
  }, []);

  return (
    <PageRootContainer>
      <CustomList
        items={popular.movies}
        onLoadNextPage={() =>
          fetchAndSetMovies(getPopularMovies, setPopular, popular.page + 1)
        }
        title={"Popular movies"}
        onFavoriteClick={(movie) => {
          updateListFavorite(setPopular, movie);
        }}
      />
      <CustomList
        items={topRated.movies}
        onLoadNextPage={() =>
          fetchAndSetMovies(getTopRatedMovies, setTopRated, topRated.page + 1)
        }
        title={"Top rated movies"}
        onFavoriteClick={(movie) => updateListFavorite(setTopRated, movie)}
      />
      <CustomList
        items={upcoming.movies}
        onLoadNextPage={() =>
          fetchAndSetMovies(getUpcomingMovies, setUpcoming, upcoming.page + 1)
        }
        title={"Upcoming movies"}
        onFavoriteClick={(movie) => updateListFavorite(setUpcoming, movie)}
      />
    </PageRootContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const topRatedMovies: IMovie[] = await getTopRatedMovies(1);
  const upcomingMovies: IMovie[] = await getUpcomingMovies(1);
  const popularMovies: IMovie[] = await getPopularMovies(1);
  return {
    props: {
      preloadedMovies: {
        topRated: topRatedMovies,
        popular: popularMovies,
        upcoming: upcomingMovies,
      },
    },
  };
};

export default Home;

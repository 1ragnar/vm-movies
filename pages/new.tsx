import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { CustomList } from "../src/components/List/CustomList";
import { IMovie } from "../src/interfaces";
import {
  getNowPlayingMovies,
  getTrendingMovies,
  fetchAndSetMovies,
} from "../src/repositories/movies";
import { PageRootContainer } from "../styles/pages";
import { updateListFavorite, updateMovieListFavorites } from "../utils/helpers";

type INewMoviesTvShowsPageProps = {
  preloadedMovies: {
    nowPlaying: IMovie[];
    todayTrending: IMovie[];
    weekTrending: IMovie[];
  };
};

const NewMoviesTvShowsPage: NextPage<INewMoviesTvShowsPageProps> = ({
  preloadedMovies,
}) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<{
    page: number;
    movies: IMovie[];
  }>({ page: 1, movies: preloadedMovies.nowPlaying });

  const [todayTrendingMovies, setTodayTrendingMovies] = useState<{
    page: number;
    movies: IMovie[];
  }>({ page: 1, movies: preloadedMovies.todayTrending });

  const [weekTrendingMovies, setWeekTrendingMovies] = useState<{
    page: number;
    movies: IMovie[];
  }>({ page: 1, movies: preloadedMovies.weekTrending });

  useEffect(() => {
    updateMovieListFavorites(setNowPlayingMovies);
    updateMovieListFavorites(setTodayTrendingMovies);
    updateMovieListFavorites(setWeekTrendingMovies);
  }, []);

  return (
    <PageRootContainer>
      <CustomList
        items={nowPlayingMovies.movies}
        onLoadNextPage={() =>
          fetchAndSetMovies(
            getNowPlayingMovies,
            setNowPlayingMovies,
            nowPlayingMovies.page + 1
          )
        }
        title={"New movies"}
        onFavoriteClick={(movie) =>
          updateListFavorite(setNowPlayingMovies, movie)
        }
      />
      <CustomList
        items={todayTrendingMovies.movies}
        onLoadNextPage={() => {}} //this api route only give one page
        title={"Today trending"}
        onFavoriteClick={(movie) =>
          updateListFavorite(setTodayTrendingMovies, movie)
        }
      />
      <CustomList
        items={weekTrendingMovies.movies}
        onLoadNextPage={() => {}} //this api route only give one page
        title={"This week trending"}
        onFavoriteClick={(movie) =>
          updateListFavorite(setWeekTrendingMovies, movie)
        }
      />
    </PageRootContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const nowPlayingMovies: IMovie[] = await getNowPlayingMovies(1);
  const todayTrendingMovies: IMovie[] = await getTrendingMovies("day");
  const weekTrendingMovies: IMovie[] = await getTrendingMovies("week");
  return {
    props: {
      preloadedMovies: {
        nowPlaying: nowPlayingMovies,
        todayTrending: todayTrendingMovies,
        weekTrending: weekTrendingMovies,
      },
    },
  };
};

export default NewMoviesTvShowsPage;

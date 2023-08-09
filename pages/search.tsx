import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CustomList } from "../src/components/List/CustomList";
import { Loader } from "../src/components/Loader/Loader";
import { IMovie } from "../src/interfaces";
import { searchMovie } from "../src/repositories/movies";
import { PageRootContainer } from "../styles/pages";
import { updateListFavorite } from "../utils/helpers";
import { isFavorite } from "../utils/localStorage";

type ISearchPageProps = {};

const SearchPage = ({}: ISearchPageProps) => {
  const router = useRouter();
  const { query } = router;

  const [withTitle, setWithTitle] = useState<{
    page: number;
    movies: IMovie[];
  }>({ page: 1, movies: [] });

  useEffect(() => {
    if (query.title) {
      //reset page and movies
      setWithTitle({
        page: 1,
        movies: [],
      });
      fetchMovies({ page: 1, title: query.title as string });
    }
  }, [query.title]);

  const fetchMovies = useCallback(
    async (data: { page: number; title: string }) => {
      try {
        const movies = await searchMovie(data);
        setWithTitle((oldData) => {
          return {
            page: oldData.page + 1,
            movies: [
              ...oldData.movies,
              ...movies.map((movie) => {
                return { ...movie, isFavorite: isFavorite(movie.id) };
              }),
            ],
          };
        });
      } catch (error) {
        toast.error(
          "Oops! Something went wrong while getting the movies. Please give it another try."
        );
        console.error("Error fetching movies:", error);
      }
    },
    []
  );

  return (
    <PageRootContainer>
      {withTitle.movies.length > 0 ? (
        <CustomList
          items={withTitle.movies}
          onLoadNextPage={() =>
            fetchMovies({
              page: withTitle.page + 1,
              title: query.title as string,
            })
          }
          title={`Movies with title ${query.title}`}
          onFavoriteClick={(movie) => updateListFavorite(setWithTitle, movie)}
        />
      ) : (
        <Loader text={"Loading movies"} />
      )}
    </PageRootContainer>
  );
};

export default SearchPage;

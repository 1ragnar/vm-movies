import { IMovieDetails } from "../../src/interfaces";
import { getMovie } from "../../src/repositories/movies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Movie } from "../../src/components/Movie/Movie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../../src/components/Loader/Loader";
import { PageRootContainer } from "../../styles/pages";

const MoviePage = () => {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.id) {
      getMovieDetails(+query.id);
    }
  }, [query]);

  const getMovieDetails = async (id: number) => {
    try {
      const movie = await getMovie(id);
      setMovieDetails(movie);
    } catch (e) {
      toast.error("Error happen while fetching movie data! Try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageRootContainer>
      {loading || !movieDetails ? (
        <Loader text={"Loading movie details"} />
      ) : (
        <Movie data={movieDetails} />
      )}
    </PageRootContainer>
  );
};

export default MoviePage;

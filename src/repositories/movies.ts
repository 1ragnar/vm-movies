import { toast } from "react-toastify";
import {
  getMovieDetailsFromResponse,
  getMoviesFromResponse,
} from "../../utils/helpers";
import api from "../api";
import { TimeWindow } from "../interfaces";

export const getMovies = async (page: number) => {
  try {
    let params = {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: page.toString(),
      sort_by: "popularity.desc",
    };
    const response = await api.movies.list(params);

    return getMoviesFromResponse(response.data.results);
  } catch (error) {
    toast.error(
      "Oops! Something went wrong while getting the movies. Please give it another try."
    );
    console.error("Function getMovies; error: " + error);
  }
};

export const getMovie = async (id: number) => {
  try {
    const response = await api.movies.getMovie(id);

    return getMovieDetailsFromResponse(response.data);
  } catch (error) {
    toast.error(
      "Oops! Something went wrong while getting the movie. Please give it another try."
    );
    console.error("Function getMovie; error: " + error);
  }
};

export const searchMovie = async (data: { title: string; page: number }) => {
  try {
    let params = {
      query: data.title,
      include_adult: "false",
      language: "en-US",
      page: data.page.toString(),
    };
    const response = await api.movies.searchMovie(params);

    return getMoviesFromResponse(response.data.results);
  } catch (error) {
    toast.error(
      "Oops! Something went wrong while searching the movies. Please give it another try."
    );
    console.error("Function searchMovie; error: " + error);
  }
};

export const getPopularMovies = async (page: number) => {
  try {
    let params = {
      page: page.toString(),
    };
    const response = await api.movies.popularMovies(params);

    return getMoviesFromResponse(response.data.results);
  } catch (e) {
    toast.error(
      "Oops! Something went wrong while getting popular movies. Please give it another try."
    );
    console.error("Function getPopularMovies; error: " + e);
  }
};

export const getNowPlayingMovies = async (page: number) => {
  try {
    let params = {
      page: page.toString(),
    };
    const response = await api.movies.nowPlayingMovies(params);

    return getMoviesFromResponse(response.data.results);
  } catch (error) {
    toast.error(
      "Oops! Something went wrong while getting now playing movies. Please give it another try."
    );
    console.error("Function getNowPlayingMovies; error: " + error);
  }
};

export const getTrendingMovies = async (type: TimeWindow) => {
  try {
    const response = await api.movies.trendingMovies(type);

    return getMoviesFromResponse(response.data.results);
  } catch (error) {
    toast.error(
      "Oops! Something went wrong while getting trending movies. Please give it another try."
    );
    console.error("Function getTrendingMovies; error: " + error);
  }
};

export const getUpcomingMovies = async (page: number) => {
  try {
    let params = {
      page: page.toString(),
    };
    const response = await api.movies.upcomingMovies(params);

    return getMoviesFromResponse(response.data.results);
  } catch (e) {
    toast.error(
      "Oops! Something went wrong while getting upcoming movies. Please give it another try."
    );
    console.error("Function getUpcomingMovies; error: " + e);
  }
};

export const getTopRatedMovies = async (page: number) => {
  try {
    let params = {
      page: page.toString(),
    };
    const response = await api.movies.topRated(params);

    return getMoviesFromResponse(response.data.results);
  } catch (error) {
    toast.error(
      "Oops! Something went wrong while getting top rated movies. Please give it another try."
    );
    console.error("Function getTopRatedMovies; error: " + error);
  }
};

export const fetchAndSetMovies = async (fetchFunction, setFunction, page) => {
  try {
    const movies = await fetchFunction(page);
    setFunction((oldData) => {
      return {
        page: oldData.page + 1,
        movies: [...oldData.movies, ...movies],
      };
    });
  } catch (error) {
    toast.error(
      "Oops! Something went wrong while getting the movies. Please give it another try."
    );
    console.error("Function getTopRatedMovies; error: " + error);
  }
};

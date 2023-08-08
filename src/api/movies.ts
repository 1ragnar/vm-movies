import { TimeWindow } from "../interfaces";
import { baseApi } from "./base";

const list = (params: {
  page: string;
  include_adult: string;
  include_video: string;
  language: string;
  sort_by: string;
}) => baseApi.get("/discover/movie", { params });

const getMovie = (id: number) => baseApi.get("/movie/" + id);

const searchMovie = (params: {
  query: string;
  include_adult: string;
  language: string;
  page: string;
}) => baseApi.get("/search/movie", { params });

const nowPlayingMovies = (params: { page: string }) =>
  baseApi.get("/movie/now_playing", { params });

const popularMovies = (params: { page: string }) =>
  baseApi.get("/movie/popular", { params });

const trendingMovies = (type: TimeWindow) =>
  baseApi.get(`/trending/movie/${type}`);

const upcomingMovies = (params: { page: string }) =>
  baseApi.get("/movie/upcoming", { params });

const topRated = (params: { page: string }) =>
  baseApi.get("/movie/top_rated", { params });

export {
  list,
  getMovie,
  searchMovie,
  nowPlayingMovies,
  popularMovies,
  trendingMovies,
  upcomingMovies,
  topRated,
};

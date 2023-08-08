import axios from "axios";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

const axiosConfig = {
  baseURL: API_HOST,
  timeout: 20000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN}`,
  },
};

const baseApi = axios.create(axiosConfig);

export { baseApi };

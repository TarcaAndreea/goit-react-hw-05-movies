import axios from 'axios';

const KEY_API = 'ccc2edcdb92f9b2d49f8d4ee31d7d307';
const URL_BASE = 'https://api.themoviedb.org/3';

export const getTrendingMovies = () => {
  return axios.get(`${URL_BASE}/trending/movie/day?api_key=${KEY_API}`);
};

export const searchMovies = query => {
  return axios.get(
    `${URL_BASE}/search/movie?api_key=${KEY_API}&query=${query}`
  );
};

export const getMovieDetails = movieId => {
  return axios.get(`${URL_BASE}/movie/${movieId}?api_key=${KEY_API}`);
};

export const getMovieCast = movieId => {
  return axios.get(`${URL_BASE}/movie/${movieId}/credits?api_key=${KEY_API}`);
};

export const getMovieReviews = movieId => {
  return axios.get(`${URL_BASE}/movie/${movieId}/reviews?api_key=${KEY_API}`);
};

import axios from "axios";


//TMDB API
const api  = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_REST_API_KEY,
    language: "ko-KR",
  },
});

//moviesApi
export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
      api.get(`movie/${id}`, {
        params: {
          append_to_response: "videos",
        },
      }),
  search: (term) =>
      api.get("movie/search", {
        params: {
          query: encodeURIComponent(term),
        },
      }),
};


//tvApi
export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
      api.get(`tv/${id}`, {
        params: {
          append_to_response: "videos",
        },
      }),
  search: (term) =>
      api.get("search/tv", {
        params: {
          query: encodeURIComponent(term),
        },
      }),
};


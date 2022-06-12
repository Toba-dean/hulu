const API_KEY = process.env.API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export default {
  fetchTrending: {
    title: 'Trending',
    url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: 'Action',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
  },
  fetchMystery: {
    title: 'Mystery',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`
  },
  fetchWestern: {
    title: 'Western',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`
  },
  fetchAnimation: {
    title: 'Animation',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`
  },
  fetchTv: {
    title: 'Tv Movies',
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10770`
  },
}
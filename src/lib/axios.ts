import axios from 'axios'

export const api = axios.create({
  baseURL: '/'
})

export const apiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params:{
      api_key: process.env.API_KEY_TMDB,
      language: 'pt-br',
  }
})
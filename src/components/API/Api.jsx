import axios from 'axios';
export const API_KEY_TMDB = '19b9b4f97f8432efbb5601f05c8bb5a9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}?language=en-US`, {
      params: {
        api_key: API_KEY_TMDB,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Eroare! Informații inexistente!');
  }
};
export const getCastDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        params: {
          api_key: API_KEY_TMDB,
        },
      }
    );
    return response.data.cast;
  } catch (error) {
    throw new Error('Eroare! Informații inexistente!');
  }
};
export const getReviews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
      {
        params: {
          api_key: API_KEY_TMDB,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error('Eroare! Informații inexistente!');
  }
};

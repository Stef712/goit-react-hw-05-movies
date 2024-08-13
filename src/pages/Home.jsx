import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY_TMDB } from 'components/API/Api';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('trending/movie/day', {
          params: {
            api_key: API_KEY_TMDB,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error finding trending movies', error);
        return [];
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}({movie.release_date})
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;

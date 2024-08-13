import { React, useState } from 'react';
import { API_KEY_TMDB } from 'components/API/Api';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MovieTitle = styled.p`
  font-size: 20px;
`;

const SearchButton = styled.button`
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  border-style: inset;
  border-color: grey;
  background-color: yellow;
`;

const InputSearch = styled.input`
  padding: 8px 8px;
`;

const Movies = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleSearch = async event => {
    event.preventDefault();
    if (!query) return;
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`search/movie`, {
        params: {
          api_key: API_KEY_TMDB,
          query: query,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      setError('Eroare! Informații inexistente!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <InputSearch
          type="text"
          value={query}
          onChange={evt => setQuery(evt.target.value)}
          placeholder="Search for a movie"
        />
        <SearchButton type="submit">Search</SearchButton>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieTitle>{movie.title}</MovieTitle>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Movies;

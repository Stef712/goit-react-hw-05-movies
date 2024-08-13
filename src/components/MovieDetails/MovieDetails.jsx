import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails, imageBaseUrl } from '../API/Api';
import {
  MovieDetailsDiv,
  MovieImage,
  SpecificDetails,
  MovieTitle,
  Overwiew,
  Release,
  Score,
  AditionalInfo,
  DetailsDiv,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <DetailsDiv>
        <Link to={backLinkHref}>Back to search</Link>
        {movie && (
          <MovieDetailsDiv>
            {movie.poster_path && (
              <MovieImage
                src={`${imageBaseUrl}${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
            )}
            <SpecificDetails>
              <MovieTitle>{movie.title}</MovieTitle>
              <p></p>
              <Overwiew>Overview: {movie.overview}</Overwiew>
              <Release>Release Date: {movie.release_date}</Release>
              <Score>Score: {movie.vote_average}</Score>
            </SpecificDetails>
          </MovieDetailsDiv>
        )}
      </DetailsDiv>
      <div>
        <AditionalInfo>Aditional information</AditionalInfo>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;

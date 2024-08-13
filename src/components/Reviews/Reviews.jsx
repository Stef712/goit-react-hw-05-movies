import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../API/Api';
import {
  ListItemReview,
  ContentReview,
  AuthorReview,
  ReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsMovie = await getReviews(movieId);
        setReviews(reviewsMovie.results || []);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ReviewsText>Reviews</ReviewsText>
      <ol>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ListItemReview key={review.id}>
              <AuthorReview>Author: {review.author}</AuthorReview>
              <ContentReview>{review.content}</ContentReview>
            </ListItemReview>
          ))
        ) : (
          <p> No reviews available.</p>
        )}
      </ol>
    </div>
  );
};

export default Reviews;

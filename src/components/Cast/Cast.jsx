import React from 'react';
import { getCastDetails } from '../API/Api';
import { useState, useEffect } from 'react';
import { imageBaseUrl } from '../API/Api';
import { useParams } from 'react-router-dom';
import {
  CastTitle,
  CastImage,
  CastItem,
  CastList,
  MemberName,
  CharacterName,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchCastDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const movieCast = await getCastDetails(movieId);
        setCast(movieCast);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCastDetails();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <CastTitle>Cast</CastTitle>
      <CastList>
        {cast.map(member => (
          <CastItem key={member.id}>
            <CastImage
              src={
                member.profile_path
                  ? `${imageBaseUrl}${member.profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/7/71/No_free_image_woman_%28en%29.svg'
              }
              alt={member.name}
              width={50}
            />
            <MemberName>{member.name}</MemberName>
            <CharacterName> Character :{member.character}</CharacterName>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;

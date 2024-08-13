import styled from 'styled-components';

export const MovieImage = styled.img`
  width: 240px;
  height: 380px;
  border-radius: 8px;
`;

export const MovieTitle = styled.h1`
  align-self: center;
  font-weight: 700;
  font-size: 40px;
  color: darkgreen;
`;

export const Overwiew = styled.p`
  color: darkblue;
`;

export const Release = styled.p`
  color: darkblue;
  font-weight: 500;
`;

export const Score = styled.p`
  color: darkblue;
  font-weight: 500;
`;

export const MovieDetailsDiv = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 24px;
`;

export const SpecificDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AditionalInfo = styled.p`
  color: darkblue;
  font-weight: 700;
`;

export const DetailsDiv = styled.div`
  display: wrap;
  flex-wrap: wrap;
`;

import styled from 'styled-components';

export const CastImage = styled.img`
  width: 120px;
  height: 160px;
  border-radius: 8px;
  object-fit: cover;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const CastItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-width: 260px;
  background-color: white;
  border-radius: 6px;
  max-height: 380px;
  padding: 2px;
  border: 2px solid black;
`;

export const MemberName = styled.p`
  max-width: 120px;
  font-size: 14px;
  color: black;
`;

export const CharacterName = styled.p`
  max-width: 120px;
  font-size: 12px;
  color: darkblue;
`;

export const CastTitle = styled.h2`
  color: darkgreen;
  font-size: 28px;
  text-align: center;
`;

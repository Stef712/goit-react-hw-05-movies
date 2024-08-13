import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  border-style: inset;
  border-color: grey;
  background-color: red;
  margin: 0px 5px;

  &.active {
    color: white;
    background-color: blue;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  > nav {
    display: flex;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  min-height: 100vh;
`;

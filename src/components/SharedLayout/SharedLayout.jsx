import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

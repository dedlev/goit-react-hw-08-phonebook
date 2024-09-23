import { GlobalStyle } from '../styles/GlobalStyle';
import { Container } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <h1>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <GlobalStyle />
    </Container>
  );
}

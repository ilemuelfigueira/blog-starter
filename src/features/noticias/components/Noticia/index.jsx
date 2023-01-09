import { Container, Header } from "./index.styled";

export const Noticia = ({ children, ...props }) => {
  const { title, description, data } = props;

  return (
    <Container>
      <Header>
        <strong>{data}</strong>
        <img src="/purple-heart.svg" />
      </Header>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
};

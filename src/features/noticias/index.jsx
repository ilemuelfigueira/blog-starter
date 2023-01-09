import { Noticia } from "./components/Noticia";
import { Container } from "./index.styled";

export const Noticias = ({ chidren, ...props }) => {
  if (!props.noticias) throw new Error("Noticias is required");

  const { noticias } = props;

  return (
    <Container>
      {noticias?.map((item) => (
        <Noticia
          title={item.nmNoticia}
          description={item.deNoticia}
          data={item.dtCadastro}
        />
      ))}
    </Container>
  );
};

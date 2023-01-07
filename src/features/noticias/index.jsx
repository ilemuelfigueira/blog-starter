import { Noticia } from "./components/Noticia";

export const Noticias = ({children, ...props}) => {

  if(!props.noticias) throw new Error('Noticias is required');

  const { noticias } = props;

  return (
    <div>
      {noticias?.map((item) => (
        <Noticia title={item.nmNoticia} description={item.deNoticia} data={item.dtCadastro} />
      ))}
    </div>
  );
}
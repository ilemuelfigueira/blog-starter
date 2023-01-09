import styled, { ThemeProvider } from 'styled-components'
import { Header } from './features/header'
import { Noticias } from './features/noticias'

const theme = {
  "purple": "#574AE8",
  "gradient-default": "linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%)",
  "white": "#FFF",
  "white-200": "#F3F5F7",
  "gray": "#717171",
  "gray-dark": "#1A202C"
}

const Layout = styled.main`
  min-height: 100vh;

  background: #f008;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
`

const noticias = [
  {
    "cdNoticia": 1,
    "nmNoticia": "Agora é oficial: o Windows 11 está vindo",
    "deNoticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
    "dtCadastro": "02 de jul, 2021",
  },
  {
    "cdNoticia": 2,
    "nmNoticia": "Tim Berners-Lee vai leiloar código-fonte da web",
    "deNoticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
    "dtCadastro": "02 de jul, 2021",
  },
  {
    "cdNoticia": 3,
    "nmNoticia": "Tem Firefox novo no pedaço e você vai querer migrar",
    "deNoticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
    "dtCadastro": "02 de jul, 2021",
  },
]

function App() {


  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <main>
          <Noticias noticias={noticias} />
        </main>
      </Layout>
    </ThemeProvider>
  )
}

export default App

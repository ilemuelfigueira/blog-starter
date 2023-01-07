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
    "nmNoticia": "Noticia 1",
    "deNoticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia.",
    "dtCadastro": "2021-03-01T00:00:00",
  },
  {
    "cdNoticia": 2,
    "nmNoticia": "Noticia 2",
    "deNoticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia.",
    "dtCadastro": "2021-03-01T00:00:00",
  },
  {
    "cdNoticia": 3,
    "nmNoticia": "Noticia 3",
    "deNoticia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Nullam auctor, nunc eget lacinia.",
    "dtCadastro": "2021-03-01T00:00:00",
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

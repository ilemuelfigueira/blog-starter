import styled, { ThemeProvider } from 'styled-components'
import { Header } from './features/header'

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

function App() {


  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <main>
          CONTEUDO
        </main>
      </Layout>
    </ThemeProvider>
  )
}

export default App

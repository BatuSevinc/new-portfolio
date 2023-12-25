import { theme } from './utils/Theme'
import { ThemeProvider } from 'styled-components'
import { Container, MainBody } from './styles/Global.styled'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          
        </Container>
      </MainBody>
    </ThemeProvider>
  )
}

export default App
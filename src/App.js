import { theme } from './utils/Theme'
import { ThemeProvider } from 'styled-components'
import { Container, MainBody } from './styles/Global.styled'
import Showcase from './components/Showcase'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Showcase/>
          <MySkills/>
          <MyProjects/>
        </Container>
      </MainBody>
    </ThemeProvider>
  )
}

export default App
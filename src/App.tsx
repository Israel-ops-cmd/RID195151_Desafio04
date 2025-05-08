import { GlobalStyle } from "./styles/GlobalStyle"
import Header from "./components/header"
import Hero from "./components/header/hero"
import { Projects } from "./components/projetos"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
    </>
  )
}

export default App

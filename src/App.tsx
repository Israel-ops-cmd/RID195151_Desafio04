import { GlobalStyle } from "./styles/GlobalStyle"
import Header from "./components/header"
import Hero from "./components/header/hero"
import { Projects } from "./components/projetos"
import { BiographySection } from "./components/biography"


function App() {
  const biographyData = [
    {
      year: "2020",
      description: "Comecei a minha jornada como desenvolvedor web, focando em front-end. ta pequeno tem que escrever mais tlgd",
    },
    {
      year: "2021",
      description: "Exploração em desenvolvimento back-end, com foco em Node.js e APIs RESTful. to testando po, calcma, é um teste",
    },
    {
      year: "2022",
      description: "Iniciei o aprendizado de TypeScript e React, aprimorando minhas habilidades em front-end. testano os tamnahos não fique com raiva ue lindo",
    },
    {
      year: "2023",
      description: "não vou repetir isso, to testanto, tem que testar, contar minha hidtorioa, minha trajetoria, e seguir em frente evoluindo.",
    },
    // Adicione mais itens conforme necessário
  ]

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
      <BiographySection data={biographyData} />
    </>
  )
}

export default App

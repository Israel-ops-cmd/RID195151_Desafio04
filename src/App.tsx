import { GlobalStyle } from "./styles/GlobalStyle"
import Header from "./components/header"
import Hero from "./components/header/hero"
import { Projects } from "./components/projetos"
import { BiographySection } from "./components/biography"
import { Footer } from "./components/footer"


function App() {

  const biographyData = [
    {
      year: "2022",
      description: "Dei meus primeiros passos na programação, explorando conceitos básicos através de linguagens de blocos. No mesmo ano, ingressei no curso de Tecnologia da Informação na UFRN, iniciando oficialmente minha jornada na área de tecnologia.",
    },
    {
      year: "2023",
      description: "Aprofundei meus estudos em lógica e programação, aprendendo linguagens como C e C++. Esse foi um ano essencial para consolidar minha base técnica e desenvolver pensamento computacional.",
    },
    {
      year: "2024",
      description: "Entrei para a escola de tecnologia DNC, na trilha de Engenharia de Software, onde tive contato com novas ferramentas, projetos práticos e uma visão mais ampla do universo tech.",
    },
    {
      year: "2025",
      description: "Tenho me dedicado ao desenvolvimento front-end, mergulhando em tecnologias como JavaScript, TypeScript e React. Já domino HTML e CSS, e estou constantemente evoluindo para criar interfaces modernas e funcionais.",
    },
  ]

  const footerDados = {
    contact: "84 999228736",
    email: "israellipe2020@gmail.com"
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
      <BiographySection data={biographyData} />
      <Footer dados={footerDados}/>
    </>
  )
}

export default App

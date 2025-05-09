import { StyledH1 } from "../../styles/GlobalStyle"
import { ProjectCards } from "./projectCard"
import { SectionContainer } from './styles'


export const Projects = () => {
    return (
        <div id="projetos">
            <StyledH1>Projetos</StyledH1>
            <SectionContainer>
                <ProjectCards
                    image="/adriel.webp"
                    title="Projeto 1"
                    description="Criação de uma landing page responsiva para vender um eBook de Matemática Básica e para concursos, com design simples e objetivo, utilizando HTML, CSS e JavaScript."
                    link="https://www.simeuquero.com.br/ebookmatematica/"
                />
                <ProjectCards
                    title="Projeto 2"
                    image="/dev.webp"
                    description="Criação de uma página de blog focada em notícias e conteúdos sobre desenvolvimento de software, com posts populares, recentes e categorias. Layout responsivo feito com HTML e CSS."
                    link="https://devvnews.netlify.app/"
                />
                <ProjectCards
                    title="Projeto 3"
                    image="/helo.webp"
                    description="Criação de uma landing page para uma pedagoga oferecer aulas particulares, com foco em conversão. Desenvolvida com React e JavaScript, a página destaca benefícios e facilita o contato com potenciais alunos."
                    link="https://prof-helo-g9wm.vercel.app/"
                />
                <ProjectCards
                    title="Projeto 4"
                    image="/dnc.webp"
                    description="Criação de um dashboard com React e TypeScript para monitoramento de vendas e leads, com login, gráficos dinâmicos e integração com API. Utilizei Hooks, Styled Components e Material UI."
                    link="https://dnc-sales-dashboar-if.vercel.app/"
                />
            </SectionContainer>
        </div>
    )
}
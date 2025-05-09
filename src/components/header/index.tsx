import React from "react"
import { Container, Nav, NavLink, SocialIcons } from "./styles"
import githubIcon from "../../assets/githubIcon.svg"
import linkedinIcon from "../../assets/linkedinIcon.svg"
import ScrollFadeIn from "../animations/scrollFadeIn"

const Header: React.FC = () => {
    return (
        <ScrollFadeIn>
            <Container>
                <Nav>
                    <NavLink href="#projetos">Projetos</NavLink>
                    <NavLink href="#tecnologias">Tecnologias</NavLink>
                    <NavLink href="#sobre">Sobre mim</NavLink>
                </Nav>
                <SocialIcons>
                    <a href="https://github.com/Israel-ops-cmd" target="_blank">
                        <img src={githubIcon} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/israelbrands/" target="_blank">
                        <img src={linkedinIcon} alt="" />
                    </a>
                </SocialIcons>
            </Container>
        </ScrollFadeIn>
    )
}

export default Header
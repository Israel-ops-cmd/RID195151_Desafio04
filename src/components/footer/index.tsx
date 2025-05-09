import type { InformationFooterProps } from "../../types/footer"
import { Container, Items, Item, SocialIcons } from "./style"
import githubIcon from "../../assets/githubIcon.svg"
import linkedinIcon from "../../assets/linkedinIcon.svg"
import figmaIcon from "../../assets/figmaIcon.svg"

export const Footer = ({dados}: InformationFooterProps) => {
    return (
        <Container>
            <Items>
                <Item>
                    <p>Meu contato:<br></br>{dados.contact}</p>
                </Item>
                <Item>
                    <p>Email:<br></br>{dados.email}</p>
                </Item>
            </Items>
            <SocialIcons>
                <a href="https://github.com/Israel-ops-cmd" target="_blank"><img src={githubIcon} alt="error" /></a>
                <a href="https://www.linkedin.com/in/israelbrands/" target="_blank"><img src={linkedinIcon} alt="error" /></a>
                <a href="https://github.com/Israel-ops-cmd" target="_blank"><img src={figmaIcon} alt="error" /></a>
            </SocialIcons>
        </Container>
    )
}
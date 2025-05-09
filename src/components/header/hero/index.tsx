import React from "react"
import { Container, Text, CodeImage } from "./styles"

const Hero: React.FC = () => {
    return (
        <Container id="tecnologias">
            <Text>
                <h1>Israel Araújo</h1>
                <p>Sou um desenvolvedor front-end especializado em transformar ideias em interfaces funcionais, acessíveis e com código de qualidade.</p>
                <a href="#sobre">
                    <button>Saber mais</button>
                </a>
            </Text>
            <CodeImage>
                <img src="/image.webp" alt="" />
            </CodeImage>
        </Container>
    )
}

export default Hero
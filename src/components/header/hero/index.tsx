import React from "react"
import { Container, Text, CodeImage } from "./styles"

const Hero: React.FC = () => {
    return (
        <Container>
            <Text>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button>Saber mais</button>
            </Text>
            <CodeImage>
                <img src="/image.webp" alt="" />
            </CodeImage>
        </Container>
    )
}

export default Hero
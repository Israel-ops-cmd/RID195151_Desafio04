import type { ProjectCardProps } from "../../types/project"
import { Container } from "./styles"

export const ProjectCards = ({ title, image, description, link }: ProjectCardProps) => {
    return (
        <Container>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank">Clique aqui</a>
        </Container>
    )
}
import type { BiographySectionProps } from "../../types/biography"
import { Container, Title, TimelineImage, Items, Item, DescriptionItems, DescriptionItem} from "./style"

export const BiographySection = ({data}: BiographySectionProps) => {
    return (
        <div>
            <Title>Sobre mim</Title>
            <Container>
            <Items>
                {data.map((item,index) => (
                    <Item key={index}>
                        <p><strong>{item.year}</strong></p>
                    </Item>
                ))}
            </Items>
            <TimelineImage src="/timeline.svg" alt="Linha do tempo" />
        </Container>
        <DescriptionItems>
                {data.map((item, index) => (
                    <DescriptionItem key={index}>
                        <p>{item.description}</p>
                    </DescriptionItem>
                ))}
            </DescriptionItems>
        </div>
        
    )
}

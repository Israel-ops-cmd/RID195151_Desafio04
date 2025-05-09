import type { BiographySectionProps } from "../../types/biography"
import { Container, Title, TimelineImage, Items, Item, DescriptionItems, DescriptionItem} from "./style"
import ScrollFadeIn from "../animations/scrollFadeIn"

export const BiographySection = ({data}: BiographySectionProps) => {
    return (
        <>
            <ScrollFadeIn>
                <div id="sobre">
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
                                <p className="mobile-year"><strong>{item.year}</strong></p>
                                <p>{item.description}</p>
                            </DescriptionItem>
                        ))}
                    </DescriptionItems>
                </div>
            </ScrollFadeIn>
        </>   
    )
}

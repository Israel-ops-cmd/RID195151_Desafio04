import styled from "styled-components"
import { pxToRem } from "../../styles/Helpers"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: ${pxToRem(100)} ${pxToRem(200)} ${pxToRem(50)} ${pxToRem(200)};

    @media (max-width: ${pxToRem(1024)}) {
        margin: ${pxToRem(100)} ${pxToRem(50)} ${pxToRem(50)} ${pxToRem(50)};
    }

    @media (max-width: ${pxToRem(768)}) {
        flex-direction: column;
    }
`

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${pxToRem(70)};

    @media (max-width: ${pxToRem(768)}) {
        flex-direction: column;
        gap: ${pxToRem(20)};
        margin: 0 auto;
        margin-bottom: ${pxToRem(30)};
        text-align: center;
    }
`

export const Item = styled.div`
    font-size: ${pxToRem(18)};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`

export const SocialIcons = styled.div`
    display: flex;
    gap: ${pxToRem(20)};
    
    img {
        width: ${pxToRem(24)};
        height: ${pxToRem(24)};
        cursor: pointer;
    }
    
    @media (max-width: ${pxToRem(768)}) {
        margin: 0 auto;
    }
`

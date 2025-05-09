import styled from "styled-components"
import { pxToRem } from "../../styles/Helpers"

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: ${pxToRem(30)};
    position: relative;

    @media (max-width: ${pxToRem(768)}) {
        flex-direction: column;
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${pxToRem(60)};

    @media (max-width: ${pxToRem(1024)}) {
        gap: ${pxToRem(30)};
    }

    @media (max-width: ${pxToRem(768)}) {
        gap: ${pxToRem(20)};
    }

`

export const NavLink = styled.a`
    font-size: ${pxToRem(16)};
    font-weight: 400;
    curso: pointer;
`

export const SocialIcons = styled.div`
    display: flex;
    gap: ${pxToRem(20)};
    position: absolute;
    right: ${pxToRem(150)};

    img {
        width: ${pxToRem(24)};
        height: ${pxToRem(24)};
        cursor: pointer;
    }

    @media (max-width: ${pxToRem(1024)}) {
        right: ${pxToRem(40)};
    }

    @media (max-width: ${pxToRem(768)}) {
        position: static;
        margin-top: ${pxToRem(20)};
    } 
`


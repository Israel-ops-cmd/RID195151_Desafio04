import styled from "styled-components"
import { useTheme } from "styled-components"

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 30px;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 60px;

    @media (max-width: 1024px) {
        gap: 30px;
    }

    @media (max-width: 768px) {
        gap: 20px;
    }

`

export const NavLink = styled.a`
    font-size: 16px;
    font-weight: 400;
    curso: pointer;
`

export const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
    position: absolute;
    right: 150px;

    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        right: 40px;
    }

    @media (max-width: 768px) {
        position: static;
        margin-top: 20px;
    } 
`


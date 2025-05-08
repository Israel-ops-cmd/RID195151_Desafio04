import styled from "styled-components"
import { pxToRem } from "../../../styles/Helpers"

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: ${pxToRem(250)};
    align-items: center; 
    margin: ${pxToRem(100)} auto;

    @media (max-width: ${pxToRem(1024)}) {
        flex-direction: column;
        gap: ${pxToRem(20)};
        margin: ${pxToRem(100)} auto ${pxToRem(20)} auto;
    }

    @media (max-width: ${pxToRem(768)}) {
        flex-direction: column;
        gap: ${pxToRem(20)};
        margin: ${pxToRem(50)} auto;
    }
`
export const Text = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};

    h1 {
        text-align: left;
        font-size: ${pxToRem(32)};
        font-wight: 600;
    }
    
    p {
        font-size: ${pxToRem(16)};
        color: #BCBCBC;
        padding-left: ${pxToRem(30)};
        line-height: ${pxToRem(25)};
    }

    button {
        width: ${pxToRem(170)};
        height: ${pxToRem(45)};
        border: 0;
        border-radius: ${pxToRem(83)};
        color: #FFF;
        font-weight: 600;
        background: linear-gradient(90deg, #945DD6 0%, #945DD6 50%, #6978D1 75%, #13ADC7 100% );
        margin-left: ${pxToRem(30)};
        cursor: pointer;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    button:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    }


    @media (max-width: ${pxToRem(1024)}) {
        gap: ${pxToRem(30)};
        width: 100%;
        align-items: center;
        text-align: center;
        margin: 0 ${pxToRem(50)};
        padding: 0;

        p{
            margin: 0 ${pxToRem(50)};
            padding: 0;
        }

        button {
            margin: 0;
        }
    }

    @media (max-width: ${pxToRem(768)}) {
        gap: ${pxToRem(30)};
        width: 100%;
        align-items: center;
        text-align: center;
        margin: 0 ${pxToRem(50)};
        padding: 0;

        h1 {
            margin: 0 ${pxToRem(30)};
            text-align: center;
        }

        p{
            margin: 0 ${pxToRem(50)};
            padding: 0;
        }

        button {
            margin: 0;
        }
    }

`

export const CodeImage = styled.div`
    width: ${pxToRem(250)};
    height: auto;
    border-radius: ${pxToRem(12)};
    overflow: hidden;
    box-shadow: 0 ${pxToRem(4)} ${pxToRem(12)} rgba(0, 0, 0, 0.15);

    img {
        width: 100%;
        height: auto;
        border-radius: ${pxToRem(12)};
        dsplay: block
    }

    @media (max-width: ${pxToRem(1024)}) {
        margin: ${pxToRem(50)} 0;
    }

    @media (max-width: ${pxToRem(769)}) {
        margin: ${pxToRem(50)} 0 0 0;
    }
`






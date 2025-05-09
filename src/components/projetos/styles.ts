import styled from "styled-components"
import { pxToRem } from "../../styles/Helpers"



export const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, ${pxToRem(280)}); 
  column-gap: ${pxToRem(100)};
  row-gap: ${pxToRem(30)};
  padding: ${pxToRem(40)};
  justify-content: center;

  @media (max-width: ${pxToRem(768)}) {
    grid-template-columns: repeat(1, 70%);
    column-gap: 0;
    padding: ${pxToRem(20)};
  }
`

export const Container = styled.div`
  padding: ${pxToRem(10)};
  position: relative;
  overflow: hidden;
  border-radius: ${pxToRem(12)} 0 ${pxToRem(12)} 0;
  border: ${pxToRem(1)} solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 ${pxToRem(12)} rgba(100, 200, 255, 0.2),
    0 0 ${pxToRem(20)} rgba(100, 200, 255, 0.1);

  h2 {
    font-size: ${pxToRem(19.2)}; /* 1.2rem ≈ 19.2px */
    margin-bottom: ${pxToRem(10)};
    text-align: center;
  }

  img {
    width: 100%;
    border-radius: ${pxToRem(8)};
    margin-bottom: ${pxToRem(5)};
  }

  p {
    font-size: ${pxToRem(15.2)}; 
    margin-bottom: ${pxToRem(20)};
    text-align: left;
    line-height: 20px;
  }

  a {
    background: linear-gradient(135deg, #6c5ce7, #00cec9);
    color: white;
    padding: ${pxToRem(10)} ${pxToRem(30)};
    border-radius: ${pxToRem(20)};
    text-decoration: none;
    font-weight: bold;
    font-size: ${pxToRem(10)};
    display: inline-block;
    transition: 0.2s;
    margin-left: 0;

    &:hover {
      opacity: 0.9;
    }
  }
`

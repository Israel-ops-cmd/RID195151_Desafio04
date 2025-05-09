import styled from "styled-components"
import { pxToRem } from "../../styles/Helpers";

export const Container = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 0;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: ${pxToRem(32)};
  margin-top: ${pxToRem(60)};
  margin-bottom: ${pxToRem(32)};
  text-align: left;
  margin-left: ${pxToRem(200)};

  @media (max-width: ${pxToRem(1024)}) {
      text-align: center;
      margin: ${pxToRem(60)} auto ${pxToRem(20)} auto;
  }

  @media (max-width: ${pxToRem(768)}) {
      text-align: center;
      margin: ${pxToRem(60)} auto ${pxToRem(20)} auto;
  }
`;

export const TimelineImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
  padding: 0;

  @media (max-width: ${pxToRem(768)}) {
      display: none;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${pxToRem(768)}) {
    display: none;
  }
`;

export const Item = styled.div`
  text-align: center;
  align-items: center;

  p:first-child {
    font-weight: bold;
    margin-bottom: 0;
  }

  p:last-child {
    font-size: ${pxToRem(16)};
  }
`;

export const DescriptionItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  .mobile-year {
    display: none;
    font-weight: bold;
    margin-bottom: ${pxToRem(8)};
  }

  @media (max-width: ${pxToRem(768)}) {
    flex-direction: column;
    width: 100%;
    gap: ${pxToRem(16)};
    align-items: center;

    .mobile-year {
      display: block;
    }
  }
`;

export const DescriptionItem = styled.div`
  text-align: center;
  align-items: center;
  width: 20%;

  p {
    font-size: ${pxToRem(16)};
    line-height: 1.4;
  }

  @media (max-width: ${pxToRem(1024)}) {
      width: 50%;
  }

  @media (max-width: ${pxToRem(768)}) {
    width: 70%;
    padding: ${pxToRem(20)};
    border: ${pxToRem(1)} solid #ddd;
    border-radius: ${pxToRem(12)};
    box-shadow: 0 ${pxToRem(2)} ${pxToRem(8)} rgba(0, 0, 0, 0.05); 
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 0;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  margin-left: 200px;

  @media (max-width: 768px) {
      text-align: center;
      margin: 0 auto 20px auto;
  }
`;

export const TimelineImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
  padding: 0;

  @media (max-width: 768px) {
      display: none;
  }
`;



export const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
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
    font-size: 1rem;
  }
`;

export const DescriptionItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    align-items: center;
  }
`;

export const DescriptionItem = styled.div`
  text-align: center;
  align-items: center;
  width: 20%;

  p {
    font-size: 16px;
    line-height: 1.4;
  }

  @media (max-width: 1024px) {
      width: 50%;
  }

  @media (max-width: 768px) {
    width: 70%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 12px;    /* borda leve */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* sombra leve */
  }
`;

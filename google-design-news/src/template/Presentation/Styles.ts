import styled from "styled-components";

export const Section = styled.div`
  height: 45vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  justify-content: center;
  align-items: center;

  strong,
  h1,
  p {
    font-family: "Archivo";
  }

  p {
    letter-spacing: 0.05em;
    line-height: 1.8em;
    text-align: center;
  }

  strong {
    text-transform: uppercase;
  }
`;

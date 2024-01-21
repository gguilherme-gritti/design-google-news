import { theme } from "@/common/styles/theme/theme";
import styled from "styled-components";

const { spacing, font, line } = theme;

export const Section = styled.div`
  height: 45vh;
  width: ${line.height.tight.value};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin-top: ${spacing.size.md.value};

  display: flex;
  flex-direction: column;
  gap: ${spacing.size.xxs.value};

  justify-content: center;
  align-items: center;

  strong,
  h1,
  p {
    font-family: ${font.family.highlight.value};
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

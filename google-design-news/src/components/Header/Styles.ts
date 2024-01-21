import { theme } from "@/common/styles/theme/theme";
import styled from "styled-components";

const { spacing, brand, neutral, spacing_squish, font } = theme;

export const Nav = styled.nav`
  display: flex;
  padding: ${spacing.size.xxxs.value} ${spacing.size.xl.value};
  height: 84px;

  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: ${brand.color.primary[3].value};

  img {
    max-height: 60px;
    max-width: 60px;
  }
`;

export const Img = styled.div`
  flex-grow: 1;
`;

export const Ul = styled.ul`
  display: flex;
  gap: ${spacing.size.xxs.value};

  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  li {
    a {
      display: block;
      text-align: center;
      padding: ${spacing_squish.size.xs.stack.value};

      text-decoration: none;
      transition: 0.4s;
      font-family: ${font.family.highlight.value};
      font-size: ${font.size.xxs.value};

      color: ${neutral.color[1].value};

      &:hover {
        background-color: ${brand.color.primary[2].value};
        color: ${neutral.color[5].value};
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

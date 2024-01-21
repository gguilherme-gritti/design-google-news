import { theme } from "@/common/styles/theme/theme";
import styled from "styled-components";

const { spacing } = theme;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: ${spacing.size.xs.value};
  padding: ${spacing.size.md.value};
`;

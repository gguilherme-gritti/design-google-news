import styled from "styled-components";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
import { StyleSheet } from "@/common/styles/stylesheet";

interface IStyledBaseComponent {
  styleSheet?: StyleSheet;
  ref: any;
}

export const StyledBaseComponent = styled.div<IStyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;

  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

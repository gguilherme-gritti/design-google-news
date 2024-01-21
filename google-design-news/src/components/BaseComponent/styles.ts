import styled from "styled-components";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
import { StyleSheet } from "@/common/styles/stylesheet";

interface IStyledBaseComponent {
  stylesheet?: StyleSheet;
  ref: any;
}

export const StyledBaseComponent = styled.div<IStyledBaseComponent>`
  ${({ stylesheet }) => parseStyleSheet(stylesheet)}
`;

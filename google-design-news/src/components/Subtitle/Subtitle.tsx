"use client";

import React, { memo } from "react";
import { StyleSheet } from "@/common/styles/stylesheet";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { TTheme, theme } from "@/common/styles/theme/theme";
import { getVariant } from "./StyledFunctions";
import { useTheme } from "styled-components";

export type TSubtitleVariant = "sm";
export type TSubtitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface ISubtitleProps {
  variant: TSubtitleVariant;
  tag?: TSubtitleTag;
  ref: any;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
}

const Subtitle = React.forwardRef(
  ({ variant, tag, styleSheet, children, ...props }: ISubtitleProps, ref) => {
    const theme = useTheme() as unknown as TTheme;

    const sVariant = getVariant(theme, variant);

    const sxProps = {
      ...sVariant,
      ...styleSheet,
    };

    return (
      <BaseComponent as={tag} {...props} ref={ref} styleSheet={sxProps}>
        {children}
      </BaseComponent>
    );
  }
);

Subtitle.displayName = "Subtitle";

Subtitle.defaultProps = {
  variant: "sm",
  tag: "h1",
};

export default memo(Subtitle);

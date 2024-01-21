"use client";

import React, { memo } from "react";
import { StyleSheet } from "@/common/styles/stylesheet";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { theme } from "@/common/styles/theme/theme";
import { getVariant } from "./StyledFunctions";

export type TSubtitleVariant = "sm";
export type TSubtitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ISubtitleProps {
  variant: TSubtitleVariant;
  tag?: TSubtitleTag;
  ref: any;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
}

const Subtitle = React.forwardRef(
  ({ variant, tag, styleSheet, children, ...props }: ISubtitleProps, ref) => {
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

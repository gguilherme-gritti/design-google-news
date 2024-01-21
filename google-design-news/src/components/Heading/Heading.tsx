"use client";

import React, { memo } from "react";
import { StyleSheet } from "@/common/styles/stylesheet";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { getVariant } from "./StyledFunctions";
import { TTheme } from "@/common/styles/theme/theme";
import { useTheme } from "styled-components";

export type THeadingVariant = "sm";
export type THeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface IHeadingProps {
  variant: THeadingVariant;
  tag?: THeadingTag;
  ref: any;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
}

const Heading = React.forwardRef(
  ({ variant, tag, styleSheet, children, ...props }: IHeadingProps, ref) => {
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

Heading.displayName = "Heading";

Heading.defaultProps = {
  variant: "sm",
  tag: "h1",
};

export default memo(Heading);

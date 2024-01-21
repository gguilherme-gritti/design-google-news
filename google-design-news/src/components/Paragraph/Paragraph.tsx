"use client";

import React, { memo } from "react";
import { StyleSheet } from "@/common/styles/stylesheet";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { getDefault } from "./StyledFunctions";
import { TTheme } from "@/common/styles/theme/theme";
import { useTheme } from "styled-components";

export type TParagraphTag = "p" | "label";

export interface IParagraphProps {
  tag?: TParagraphTag;
  ref: any;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
}

const Paragraph = React.forwardRef(
  ({ tag, styleSheet, children, ...props }: IParagraphProps, ref) => {
    const theme = useTheme() as unknown as TTheme;

    const sDefault = getDefault(theme);

    const sxProps = {
      ...sDefault,
      ...styleSheet,
    };

    return (
      <BaseComponent as={tag} {...props} ref={ref} styleSheet={sxProps}>
        {children}
      </BaseComponent>
    );
  }
);

Paragraph.displayName = "Paragraph";

Paragraph.defaultProps = {
  tag: "p",
};

export default memo(Paragraph);

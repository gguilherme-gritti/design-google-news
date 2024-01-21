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
  stylesheet?: StyleSheet;
  children?: React.ReactNode;
}

const Paragraph = React.forwardRef(
  ({ tag, stylesheet, children, ...props }: IParagraphProps, ref) => {
    const theme = useTheme() as unknown as TTheme;

    const sDefault = getDefault(theme);

    const sxProps = {
      ...sDefault,
      ...stylesheet,
    };

    return (
      <BaseComponent as={tag} {...props} ref={ref} stylesheet={sxProps}>
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

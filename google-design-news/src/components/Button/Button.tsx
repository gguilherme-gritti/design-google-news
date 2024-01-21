"use client";

import React, { memo } from "react";
import { StyleSheet } from "@/common/styles/stylesheet";
import { BaseComponent } from "../BaseComponent/BaseComponent";
// import { theme } from "@/common/styles/theme/theme";
import { getDefault, getVariant } from "./StyledFunctions";
import { useTheme } from "styled-components";
import { TTheme } from "@/common/styles/theme/theme";

export type TButtonVariant = "primary";

export interface ButtonProps {
  children?: React.ReactNode;
  stylesheet?: StyleSheet;
  variant: TButtonVariant;
  ref?: any;
}

const Button = React.forwardRef(
  ({ children, stylesheet, variant, ...props }: ButtonProps, ref) => {
    const theme = useTheme() as unknown as TTheme;
    const sDefault = getDefault(theme);
    const sVariant = getVariant(theme, variant);

    const sxProps = {
      ...sDefault,
      ...sVariant,
      ...stylesheet,
    };

    return (
      <BaseComponent as={"button"} {...props} ref={ref} stylesheet={sxProps}>
        {children}
      </BaseComponent>
    );
  }
);

Button.displayName = "Button";
Button.defaultProps = {
  variant: "primary",
};

export default memo(Button);

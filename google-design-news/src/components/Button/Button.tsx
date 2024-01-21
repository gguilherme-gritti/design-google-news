"use client";

import React, { memo } from "react";
import { StyleSheet } from "@/common/styles/stylesheet";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { theme } from "@/common/styles/theme/theme";
import { getDefault, getVariant } from "./StyledFunctions";

export type TButtonVariant = "primary";

interface ButtonProps {
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  variant: TButtonVariant;
  ref?: any;
}

const Button = React.forwardRef(
  ({ children, styleSheet, variant, ...props }: ButtonProps, ref) => {
    const sDefault = getDefault(theme);
    const sVariant = getVariant(theme, variant);

    const sxProps = {
      ...sDefault,
      ...sVariant,
      ...styleSheet,
    };

    console.log(sxProps);

    return (
      <BaseComponent as={"button"} {...props} ref={ref} styleSheet={sxProps}>
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

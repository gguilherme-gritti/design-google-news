"use client";

import React, { memo } from "react";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { getDefault } from "./StyledFunctions";
import { TTheme } from "@/common/styles/theme/theme";
import { useTheme } from "styled-components";

export interface IShapeProps {
  children?: React.ReactNode;
  stylesheet?: StyleSheet;
}

const Shape = ({ children, stylesheet, ...props }: IShapeProps) => {
  const theme = useTheme() as unknown as TTheme;

  const sDefault = getDefault(theme);

  const sxProps = {
    ...sDefault,
    ...stylesheet,
  };

  return (
    <BaseComponent as={"div"} {...props} stylesheet={sxProps}>
      {children}
    </BaseComponent>
  );
};

Shape.displayName = "Shape";

export default memo(Shape);

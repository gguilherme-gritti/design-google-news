"use client";

import React, { memo } from "react";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { getDefault } from "./StyledFunctions";
import { theme } from "@/common/styles/theme/theme";

interface IShapeProps {
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

const Shape = ({ children, styleSheet, ...props }: IShapeProps) => {
  const sDefault = getDefault(theme);

  const sxProps = {
    ...sDefault,
    ...styleSheet,
  };

  return (
    <BaseComponent as={"div"} {...props} styleSheet={sxProps}>
      {children}
    </BaseComponent>
  );
};

Shape.displayName = "Shape";

export default memo(Shape);
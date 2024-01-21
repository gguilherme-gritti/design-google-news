"use client";

import { StyleSheet } from "@/common/styles/stylesheet";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import Shape from "../Shape/Shape";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import { memo } from "react";
import { getMargin } from "./StyledFunctions";
import { theme } from "@/common/styles/theme/theme";

interface ICardContentProps {
  heading: string;
  subtitle: string;
  text: string;
  buttonLabel: string;
  styleSheet?: StyleSheet;
}

export type TSizeCardContentSpacing = "xxxs" | "xxs" | "sm";

const CardContent = ({
  heading,
  subtitle,
  text,
  buttonLabel,
  styleSheet,
  ...props
}: ICardContentProps) => {
  const headingMargin = getMargin(theme, "xxxs");
  const subtitleMargin = getMargin(theme, "xxs");
  const paragraphMargin = getMargin(theme, "sm");

  return (
    <BaseComponent
      {...props}
      styleSheet={{
        ...styleSheet,
      }}
    >
      <Shape>
        <Heading
          variant="sm"
          styleSheet={{
            ...headingMargin,
          }}
        >
          {heading}
        </Heading>
        <Subtitle
          variant="sm"
          styleSheet={{
            ...subtitleMargin,
          }}
        >
          {subtitle}
        </Subtitle>
        <Paragraph
          styleSheet={{
            ...paragraphMargin,
          }}
        >
          {text}
        </Paragraph>
        <Button variant="primary">{buttonLabel}</Button>
      </Shape>
    </BaseComponent>
  );
};

export default memo(CardContent);

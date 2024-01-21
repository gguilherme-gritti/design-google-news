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
import { TTheme } from "@/common/styles/theme/theme";
import { useTheme } from "styled-components";

interface ICardContentProps {
  heading: string;
  subtitle: string;
  text: string;
  button: React.ReactNode;
  stylesheet?: StyleSheet;
}

export type TSizeCardContentSpacing = "xxxs" | "xxs" | "sm";

const CardContent = ({
  heading,
  subtitle,
  text,
  button,
  stylesheet,
  ...props
}: ICardContentProps) => {
  const theme = useTheme() as unknown as TTheme;

  const headingMargin = getMargin(theme, "xxxs");
  const subtitleMargin = getMargin(theme, "xxs");
  const paragraphMargin = getMargin(theme, "sm");

  return (
    <BaseComponent
      {...props}
      stylesheet={{
        ...stylesheet,
      }}
    >
      <Shape>
        <Heading
          variant="sm"
          stylesheet={{
            ...headingMargin,
          }}
        >
          {heading}
        </Heading>
        <Subtitle
          variant="sm"
          stylesheet={{
            ...subtitleMargin,
          }}
        >
          {subtitle}
        </Subtitle>
        <Paragraph
          stylesheet={{
            ...paragraphMargin,
          }}
        >
          {text}
        </Paragraph>
        {button}
      </Shape>
    </BaseComponent>
  );
};

export default memo(CardContent);

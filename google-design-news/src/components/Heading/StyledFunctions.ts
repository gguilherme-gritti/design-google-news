"use client";

import { TTheme } from "@/common/styles/theme/theme";
import { THeadingVariant } from "./Heading";

const sizeBy = (theme: TTheme) => {
  const { font, line } = theme;

  return {
    sm: {
      fontSize: font.size.lg.value, // $font-size-lg
      lineHeight: line.height.distant.value, // $line-height-distant
    },
  };
};

const colorBy = (theme: TTheme) => {
  const { font, neutral } = theme;

  return {
    sm: {
      fontFamily: font.family.highlight.value, // $font-family-highlight
      fontWeight: font.weight.bold.value, // $font-weight-bold
      color: neutral.color[5].value, // $color-neutral-01 ?
    },
  };
};

export const getVariant = (theme: TTheme, variant: THeadingVariant) => {
  const size = sizeBy(theme);
  const color = colorBy(theme);

  return {
    ...size[variant],
    ...color[variant],
  };
};

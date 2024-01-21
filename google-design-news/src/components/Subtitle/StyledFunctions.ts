import { TTheme } from "@/common/styles/theme/theme";
import { TSubtitleVariant } from "./Subtitle";

const sizeBy = (theme: TTheme) => {
  const { font, line } = theme;

  return {
    sm: {
      fontSize: font.size.md.value, // $font-size-md
      lineHeight: line.height.medium.value, // $line-height-medium
    },
  };
};

const colorBy = (theme: TTheme) => {
  const { font, neutral } = theme;

  return {
    sm: {
      fontFamily: font.family.highlight.value, // $font-family-highlight
      fontWeight: font.weight.medium.value, // $font-weight-medium
      color: neutral.color[4].value, // $color-neutral-02 ?
    },
  };
};

export const getVariant = (theme: TTheme, variant: TSubtitleVariant) => {
  const size = sizeBy(theme);
  const color = colorBy(theme);

  return {
    ...size[variant],
    ...color[variant],
  };
};

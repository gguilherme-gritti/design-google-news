import { TTheme } from "@/common/styles/theme/theme";
import { TButtonVariant } from "./Button";

const sizeBy = (theme: TTheme) => {
  const { font, line, radius, spacing_squish } = theme;

  return {
    primary: {
      fontSize: font.size.sm.value, // $font-size-sm
      lineHeight: line.height.tight.value, // $line-height-tight
      borderRadius: radius.size.none.value, //$border-radius-none
      padding: spacing_squish.size.xs.stack.value, //$spacing-squish-xs
    },
  };
};

const colorBy = (theme: TTheme) => {
  const { font, brand, neutral } = theme;

  return {
    primary: {
      fontFamily: font.family.highlight.value, //$font-family-highlight
      fontWeight: font.weight.medium.value, //$font-weight-medium
      color: neutral.color[1].value, //$color-default-neutral-05
      backgroundColor: brand.color.primary[3].value, //$color-brand-primary-03

      hover: {
        backgroundColor: brand.color.primary[4].value, // ? $color-brand-primary-02
        cursor: "pointer",
      },
    },
  };
};

export const getDefault = (theme: TTheme) => {
  const { border } = theme;

  return {
    border: border.size.none.value,
  };
};

export const getVariant = (theme: TTheme, variant: TButtonVariant) => {
  const size = sizeBy(theme);
  const color = colorBy(theme);

  return {
    ...size[variant],
    ...color[variant],
  };
};

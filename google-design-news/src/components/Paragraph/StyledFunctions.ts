import { TTheme } from "@/common/styles/theme/theme";

const defaultSize = (theme: TTheme) => {
  const { font, line } = theme;

  return {
    fontSize: font.size.xs.value, // $font-size-xs
    lineHeight: line.height.distant.value, // $line-height-distant
  };
};

const defaultColor = (theme: TTheme) => {
  const { font, neutral } = theme;

  return {
    fontFamily: font.family.highlight.value, //$font-family-highlight
    fontWeight: font.weight.regular.value, //$font-weight-regular
    color: neutral.color[4].value, //$color-neutral-02
  };
};

export const getDefault = (theme: TTheme) => {
  const size = defaultSize(theme);
  const color = defaultColor(theme);

  return {
    ...size,
    ...color,
  };
};

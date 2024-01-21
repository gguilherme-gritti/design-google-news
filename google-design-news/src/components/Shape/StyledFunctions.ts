import { TTheme } from "@/common/styles/theme/theme";

const defaultSize = (theme: TTheme) => {
  const { radius, spacing, border } = theme;

  return {
    borderRadius: radius.size.none.value, // $border-radius-none
    padding: spacing.size.lg.value, // $spacing-inset-lg
    borderWidth: border.size.thin.value, // $border-width-thin

    minHeight: "427px",
    width: "427px",
  };
};

const defaultColor = (theme: TTheme) => {
  const { neutral } = theme;

  return {
    border: `1px solid ${neutral.color[2].value}`, //$color-neutral-04
    backgroundColor: neutral.color[1].value, //$color-neutral-05
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

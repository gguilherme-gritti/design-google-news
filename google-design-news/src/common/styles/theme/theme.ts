"use client";

import {
  border,
  brand,
  font,
  line,
  neutral,
  opacity,
  radius,
  shadow,
  spacing,
  spacing_squish,
} from "./design-tokens";

export const theme = {
  border,
  opacity,
  shadow,
  spacing,
  spacing_squish,
  radius,
  font,
  line,
  brand,
  neutral,
};

export type TTheme = typeof theme;

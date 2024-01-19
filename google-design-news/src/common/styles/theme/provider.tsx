"use client";

import StyledComponentsRegistry from "./registry";

const ThemesProviders = ({ children }: { children: React.ReactNode }) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default ThemesProviders;

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import { theme } from "./theme";

const ThemesProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>{" "}
    </ThemeProvider>
  );
};

export default ThemesProviders;

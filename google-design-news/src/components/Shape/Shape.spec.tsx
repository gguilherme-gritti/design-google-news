import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Shape from "./Shape";
import { theme } from "../../common/styles/theme/theme";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("Shape Component", () => {
  it("should render", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Shape>Shape</Shape>
      </ThemeProvider>
    );

    const { neutral } = theme;

    const el: HTMLElement = container.firstChild as HTMLElement;

    if (!el) {
      throw new Error("O elemento do componente não foi encontrado.");
    }

    const style = window.getComputedStyle(el);

    expect(style.border).toBe(
      `1px solid ${neutral.color[2].value.toLowerCase()}`
    );
  });
});

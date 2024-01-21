import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Subtitle from "./Subtitle";
import { theme } from "../../common/styles/theme/theme";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("Subtitle Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Subtitle variant="sm">Subtitle Sm</Subtitle>
      </ThemeProvider>
    );

    expect(getByText("Subtitle Sm")).toBeInTheDocument();
  });
});

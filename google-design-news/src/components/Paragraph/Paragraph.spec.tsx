import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Paragraph from "./Paragraph";
import { theme } from "../../common/styles/theme/theme";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("Paragraph Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Paragraph>Paragraph</Paragraph>
      </ThemeProvider>
    );

    expect(getByText("Paragraph")).toBeInTheDocument();
  });
});

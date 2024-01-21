import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Heading from "./Heading";
import { theme } from "../../common/styles/theme/theme";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("Heading Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading variant="sm">Heading Sm</Heading>
      </ThemeProvider>
    );

    expect(getByText("Heading Sm")).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Button from "./Button";
import { theme } from "../../common/styles/theme/theme";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("Button Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant="primary">Button primary</Button>
      </ThemeProvider>
    );

    expect(getByText("Button primary")).toBeInTheDocument();
  });
});

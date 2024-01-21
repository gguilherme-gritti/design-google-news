import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CardContent from "./CardContent";
import { theme } from "../../common/styles/theme/theme";
import Button from "../Button/Button";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("CardContent Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CardContent
          heading="Heading"
          subtitle="Subtitle"
          text="Paragraph"
          button={<Button variant="primary">Button</Button>}
        />
      </ThemeProvider>
    );

    expect(getByText("Heading")).toBeInTheDocument();
    expect(getByText("Subtitle")).toBeInTheDocument();
    expect(getByText("Paragraph")).toBeInTheDocument();
    expect(getByText("Button")).toBeInTheDocument();
  });
});

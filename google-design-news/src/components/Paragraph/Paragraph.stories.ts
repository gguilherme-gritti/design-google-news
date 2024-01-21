import { Meta, StoryObj } from "@storybook/react";
import Paragraph, { IParagraphProps } from "./Paragraph";

const meta: Meta<IParagraphProps> = {
  title: "Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    tag: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
};

export default meta;

export const ParagraphDefault: StoryObj<IParagraphProps> = {
  args: {
    children: "Paragraph",
    tag: "p",
  },
};

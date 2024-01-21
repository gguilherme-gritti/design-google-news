import { Meta, StoryObj } from "@storybook/react";
import Heading, { IHeadingProps } from "./Heading";

const meta: Meta<IHeadingProps> = {
  title: "Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    tag: {
      type: "string",
    },
    children: {
      type: "string",
    },
    variant: {
      type: "string",
    },
  },
};

export default meta;

export const HeadingSm: StoryObj<IHeadingProps> = {
  args: {
    children: "Heading Sm",
    variant: "sm",
    tag: "h1",
  },
};

import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Button Label",
    variant: "primary",
  },
};

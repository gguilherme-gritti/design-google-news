import { Meta, StoryObj } from "@storybook/react";
import Subtitle, { ISubtitleProps } from "./Subtitle";

const meta: Meta<ISubtitleProps> = {
  title: "Subtitle",
  component: Subtitle,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export default meta;

export const SubtitleSm: StoryObj<ISubtitleProps> = {
  args: {
    children: "Subtitle Sm",
    tag: "h2",
    variant: "sm",
  },
};

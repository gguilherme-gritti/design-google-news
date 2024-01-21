import { Meta, StoryObj } from "@storybook/react";
import Shape, { IShapeProps } from "./Shape";

const meta: Meta<IShapeProps> = {
  title: "Shape",
  component: Shape,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export default meta;

export const ShapeDefault: StoryObj<IShapeProps> = {
  args: {
    children: "",
  },
};

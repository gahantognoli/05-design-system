import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@gab-ignite-ui/react";

const meta = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta<ButtonProps>;

export default meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  }
};

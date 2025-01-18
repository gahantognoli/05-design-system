import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@gab-ignite-ui/react";

const meta = {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis temporibus alias ratione perferendis eligendi quos, iusto, ea exercitationem, asperiores beatae accusamus id provident molestiae. Repellat architecto provident temporibus quidem molestiae.",
  },
} as Meta<TextProps>;

export default meta;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
};

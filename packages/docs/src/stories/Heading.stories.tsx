import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@gab-ignite-ui/react";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children:
      "Custom title",
  },
} as Meta<HeadingProps>;

export default meta;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'strong'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um H2, mas podemos alterar por meio da propriedade as.'
      }
    }
  }
};

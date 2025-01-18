import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@gab-ignite-ui/react";

const meta = {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testando o elemento</Text>
    
  },
} as Meta<BoxProps>;

export default meta;

export const Primary: StoryObj<BoxProps> = {};
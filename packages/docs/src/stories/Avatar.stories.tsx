import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@gab-ignite-ui/react";

const meta = {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/gahantognoli.png',
    alt: 'Gabriel Antognoli'
  },
} as Meta<AvatarProps>;

export default meta;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};

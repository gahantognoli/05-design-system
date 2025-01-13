import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@gab-ignite-ui/react'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonEx: Story = {};
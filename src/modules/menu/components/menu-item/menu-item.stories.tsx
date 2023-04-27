import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './menu-item.component';

const meta: Meta<typeof MenuItem> = {
  title: 'Common/MenuItem',
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const View: Story = {
  args: {
    imagePath: '/assets/pizza/manhattan.jpeg',
    weight: 555,
    title: 'Пицца',
    ingredients: 'Descr',
    price: 215,
  },
};

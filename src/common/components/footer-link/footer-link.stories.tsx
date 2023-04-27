import type { Meta, StoryObj } from '@storybook/react';
import { FooterLink } from './footer-link.component';

const meta: Meta<typeof FooterLink> = {
  title: 'Common/FooterLink',
  component: FooterLink,
};

export default meta;
type Story = StoryObj<typeof FooterLink>;

export const View: Story = {
  render: (args) => (
    <ul>
      <FooterLink {...args} />
    </ul>
  ),
  args: {
    href: 'tel:+3804412345567',
    children: '044 123 45 67',
  },
};

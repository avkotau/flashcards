import type { Meta, StoryObj } from '@storybook/react'

import { ComeInIcon } from '@/assets/icons/components/comeInIcon'

import { Button } from './'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button primary',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryIcon: Story = {
  args: {
    children: 'Button primary',
    className: 'active',
    disabled: false,
    icon: <ComeInIcon />,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    disabled: false,
    variant: 'secondary',
  },
}

export const PrimaryIconDarkColor: Story = {
  args: {
    children: 'Button primary',
    className: 'active',
    disabled: false,
    icon: <ComeInIcon />,
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    disabled: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: 'Link-button',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://www.google.com',
    variant: 'primary',
  },
}

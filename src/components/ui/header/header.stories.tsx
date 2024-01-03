import { Header } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const SingIn: Story = {
  args: {
    isDisabled: false,
    isLoggedIn: false,
  },
}

export const LoggedIn: Story = {
  args: {
    avatar: 'https://placehold.co/96',
    email: 'j&johnson@gmail.com',
    isDisabled: false,
    isLoggedIn: true,
    name: 'Ivan',
  },
}

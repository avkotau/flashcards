import { CheckEmail } from '@/components/auth/checkEmail/checkEmail'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckEmail> = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'example@mail.com',
  },
}

import { SignUpForm } from '@/components/auth/signUpForm/signUpForm'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

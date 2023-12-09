import { SignUpForm } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

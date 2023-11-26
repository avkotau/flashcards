import { CreateNewPasswordForm } from '@/components/auth/createNewPasswordForm/createNewPasswordForm'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CreateNewPasswordForm> = {
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPasswordForm',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

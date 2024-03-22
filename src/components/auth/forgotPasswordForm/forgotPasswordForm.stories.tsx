import { BrowserRouter } from 'react-router-dom'

import { ForgotPasswordForm } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ForgotPasswordForm> = {
  component: ForgotPasswordForm,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

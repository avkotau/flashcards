import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import { GoBack } from '@/components'

const meta: Meta<typeof GoBack> = {
  component: GoBack,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/GoBack',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Back',
  },
}

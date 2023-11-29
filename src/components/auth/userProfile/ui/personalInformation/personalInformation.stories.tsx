import { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './personalInformation'

const meta: Meta<typeof PersonalInformation> = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      avatar:
        'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
      email: 'alex@gmail.com',
      name: 'Alex',
    },
  },
}

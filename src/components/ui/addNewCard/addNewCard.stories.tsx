import { AddNewCard, Button } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AddNewCard,
  tags: ['autodocs'],
  title: 'Cards/AddNewCard',
} satisfies Meta<typeof AddNewCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpenModalBtn: <Button>Add New Card</Button>,
  },
}

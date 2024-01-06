import { Button } from '@/components/ui/button'
import { AddDeckToModal } from '@/components/ui/deck/addDeckToModal/addDeckToModal'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AddDeckToModal,
  tags: ['autodocs'],
  title: 'Components/AddDeckToModal',
} satisfies Meta<typeof AddDeckToModal>

export default meta

type Story = StoryObj<typeof meta>

export const AddDeckIntoModal: Story = {
  args: {
    isOpenModalBtn: (
      <Button>
        <Typography.Subtitle2>Add New Card</Typography.Subtitle2>
      </Button>
    ),
    title: 'Add New Deck',
    valueBtn: 'Add New Deck',
    values: {
      cover: 'https://placehold.co/120',
      isPrivate: false,
      name: 'Example input text',
    },
  },
}

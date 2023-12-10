import { DeleteIcon } from '@/assets'
import { IconButton } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

import { DeleteDeckToModal } from './deleteDeckToModal'

const meta = {
  component: DeleteDeckToModal,
  tags: ['autodocs'],
  title: 'Components/DeleteDeckToModal',
} satisfies Meta<typeof DeleteDeckToModal>

export default meta

type Story = StoryObj<typeof meta>

export const DeleteDeckToModalCheck: Story = {
  args: {
    entityName: 'deckName',
    isOpenModalBtn: <IconButton icon={<DeleteIcon />} />,
    title: 'Delete Deck',
    value: 'Deck name',
    valueBtn: 'Delete Deck',
  },
}

export const DeleteCardToModalCheck: Story = {
  args: {
    entityName: 'cardName',
    isOpenModalBtn: <IconButton icon={<DeleteIcon />} />,
    title: 'Delete Card',
    value: 'Card Name',
    valueBtn: 'Delete Card',
  },
}

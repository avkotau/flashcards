import { EditIcon } from '@/assets'
import { EditDeckToModal, IconButton } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: EditDeckToModal,
  tags: ['autodocs'],
  title: 'Components/EditDeckToModal',
} satisfies Meta<typeof EditDeckToModal>

export default meta

type Story = StoryObj<typeof meta>

export const EditDeckToModalCheck: Story = {
  args: {
    isOpenModalBtn: <IconButton icon={<EditIcon />} />,
    title: 'Edit Deck',
    valueBtn: 'Save Changes',
  },
}

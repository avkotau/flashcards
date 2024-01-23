import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { Button } from '@/components/ui/button'
import { AddDeckToModal } from '@/components/ui/deck/addDeckToModal/addDeckToModal'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AddDeckToModal,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/AddDeckToModal',
} satisfies Meta<typeof AddDeckToModal>

export default meta

type Story = StoryObj<typeof meta>

export const AddDeckIntoModal: Story = {
  args: {
    isOpenModalBtn: (
      <Button>
        <Typography.Subtitle2>Add New Deck</Typography.Subtitle2>
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

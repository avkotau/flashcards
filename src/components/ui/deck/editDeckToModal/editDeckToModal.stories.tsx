import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { EditIcon } from '@/assets'
import { EditDeckToModal, IconButton } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: EditDeckToModal,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/EditDeckToModal',
} satisfies Meta<typeof EditDeckToModal>

export default meta

type Story = StoryObj<typeof meta>

export const EditDeckToModalCheck: Story = {
  args: {
    id: 'clrnyxxwq006uy42wj18e3lks',
    isOpenModalBtn: <IconButton icon={<EditIcon />} />,
    title: 'Edit Deck',
    valueBtn: 'Save Changes',
    values: {
      cover: 'https://placehold.co/120',
      isPrivate: true,
      name: 'Example input text',
    },
  },
}

import { Meta, StoryObj } from '@storybook/react'

import { SelectItemType } from '../../select/selectItem'
import { AddCardModal } from './addCardModal'

const meta = {
  component: AddCardModal,
  tags: ['autodocs'],
  title: 'Cards/AddCardModal',
} satisfies Meta<typeof AddCardModal>

export default meta
type Story = StoryObj<typeof meta>

const initialState: SelectItemType[] = [
  { title: 'Select 1', value: '1' },
  { title: 'Select 2', value: '2' },
  { title: 'Select 3', value: '3' },
  { title: 'Select 4', value: '4' },
  { title: 'Select 5', value: '5' },
]

export const Default: Story = {
  args: {
    initialState,
  },
}

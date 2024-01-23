import { EditIcon } from '@/assets'
import { IconButton } from '@/components'
import { SelectItemType } from '@/components/ui/select/selectItem'
import { Meta, StoryObj } from '@storybook/react'

import { EditCard } from './editCard'

const meta = {
  component: EditCard,
  tags: ['autodocs'],
  title: 'Cards/EditCard',
} satisfies Meta<typeof EditCard>

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
    isOpenModalBtn: <IconButton icon={<EditIcon />} />,
  },
}

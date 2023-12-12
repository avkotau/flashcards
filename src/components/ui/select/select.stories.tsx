import { Meta, StoryObj } from '@storybook/react'

import { CustomSelect } from './select'
import { SelectItemType } from './selectItem'

const meta = {
  component: CustomSelect,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof CustomSelect>

export default meta

type Story = StoryObj<typeof meta>

const initialState: SelectItemType[] = [
  { title: 'Select 1', value: '1' },
  { title: 'Select 2', value: '2' },
  { title: 'Select 3', value: '3' },
  { title: 'Select 4', value: '4' },
  { title: 'Select 5', value: '5' },
]

export const Select: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    label: 'Select-box',
    options: initialState,
  },
}

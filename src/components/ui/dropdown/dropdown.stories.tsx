import { DeleteIcon, EditIcon, PlayIcon } from '@/assets'
import { Dropdown, DropdownItemWithIcon } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
  },
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<PlayIcon size={1.6} />} onSelect={() => {}} text={'Learn'} />
        <DropdownItemWithIcon icon={<EditIcon size={1.6} />} onSelect={() => {}} text={'Edit'} />
        <DropdownItemWithIcon
          icon={<DeleteIcon size={1.6} />}
          onSelect={() => {}}
          text={'Delete'}
        />
      </>
    ),
  },
}

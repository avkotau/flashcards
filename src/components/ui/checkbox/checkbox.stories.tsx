import { Meta, StoryObj } from '@storybook/react'

import { CustomCheckbox } from './'

const meta = {
  args: {
    disabled: false,
    label: 'Click here',
  },
  component: CustomCheckbox,
  tags: ['autodocs'],
  title: 'Components/Checkboxes',
} satisfies Meta<typeof CustomCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  render: args => {
    // const [checked, setChecked] = useState(true)

    return <CustomCheckbox {...args} />
  },
}

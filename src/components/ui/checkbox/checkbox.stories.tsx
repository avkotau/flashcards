import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { CustomCheckbox } from './'
import { ValuePreview } from './valuePreview'
import { VerticalContainer } from './verticalConteiner'

const meta = {
  component: CustomCheckbox,
  tags: ['autodocs'],
  title: 'Components/Checkboxes',
} satisfies Meta<typeof CustomCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Click here',
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(true)

    return (
      <VerticalContainer>
        <CustomCheckbox {...args} checked={checked} onChange={setChecked} />
        <ValuePreview>checked: {String(checked)}</ValuePreview>
      </VerticalContainer>
    )
  },
}

import { useState } from 'react'

import { RadioGroup, RadioSelectorProps } from '@/components/ui/radioGroup/radioGroup'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Auth/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

const InitialState = [
  { disabled: false, id: 'r1', label: 'First Radio', value: 'FirstRadio' },
  { disabled: false, id: 'r2', label: 'Second Radio', value: 'SecondRadio' },
  { disabled: false, id: 'r3', label: 'Third Radio', value: 'ThirdRadio' },
  { disabled: false, id: 'r4', label: 'Fourth Radio', value: 'FourthRadio' },
]

export type RadioOption = (typeof InitialState)[number]

const RadioSelector = (args: RadioSelectorProps) => {
  const [isActive, setIsActive] = useState(args.active)

  const changeActiveRadioItem = (activeState: string) => {
    setIsActive(activeState)
  }

  return (
    <RadioGroup active={isActive} onValueChange={changeActiveRadioItem} options={args.options} />
  )
}

export const Default: Story = {
  args: {
    active: 'FirstRadio',
    options: InitialState,
  },
  render: args => <RadioSelector {...args} />,
}

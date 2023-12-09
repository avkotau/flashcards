import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioSelectorProps } from './radioGroup'

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
  { disabled: true, id: 'r4', label: 'Fourth Radio', value: 'FourthRadio' },
]

export type RadioOption = (typeof InitialState)[number]

const RadioSelector = (args: RadioSelectorProps) => {
  const [isActive, setIsActive] = useState(args.value)

  const changeActiveRadioItem = (activeState: string) => {
    setIsActive(activeState)
  }

  return (
    <RadioGroup onValueChange={changeActiveRadioItem} options={args.options} value={isActive} />
  )
}

export const Default: Story = {
  args: {
    options: InitialState,
    value: 'SecondRadio',
  },
  render: args => <RadioSelector {...args} />,
}

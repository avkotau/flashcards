import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

const SliderCreator = (args: any) => {
  const [value, setValue] = useState(args.value)

  const handleValueChange = (value: number[]) => {
    setValue(value)
  }

  return <Slider {...args} onValueChange={handleValueChange} value={value} />
}

export const Default: Story = {
  args: {
    max: 10,
    min: 0,
    step: 1,
    title: 'Here should be label',
    value: [0, 10],
  },

  render: args => <SliderCreator {...args} />,
}

import { useState } from 'react'

import { Slider } from '@/components/ui/slider/slider'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Here should be label',
    max: 10,
    min: 0,
    step: 1,
    value: [0, 10],
  },

  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value)

    const handleOnValueChange = (value: number[]) => {
      setValue(value)
    }

    return <Slider {...args} onValueChange={handleOnValueChange} value={value} />
  },
}

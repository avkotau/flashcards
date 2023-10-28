import { Card } from '@/components/ui/card/card'
import { StoryObj } from '@storybook/react'

const meta = {
  argType: {},
  component: Card,
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof meta>

export const Cards: Story = {
  args: {
    sHeight: 552,
    sWidth: 420,
  },
}

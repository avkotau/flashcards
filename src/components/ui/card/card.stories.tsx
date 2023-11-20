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
    children: (
      <div
        style={{
          backgroundColor: '#171717',
          fontSize: '32px',
          height: '34.5rem',
          textAlign: 'center',
          width: '26.25rem',
        }}
      >
        Dark Theme
      </div>
    ),
    style: {
      height: '34.5rem',
      width: '26.25rem',
    },
  },
}

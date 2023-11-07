import { InputFactory } from '@/components/ui/input/input'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'active', 'error', 'hover', 'focus', 'disabled'],
    },
  },
  component: InputFactory,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof InputFactory>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    error: false,
    label: 'Input',
    placeholder: 'Input',
    title: 'Value',
    type: 'text',
    variant: 'default',
  },
  render: args => <InputFactory {...args} />,
}

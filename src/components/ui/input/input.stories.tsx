import { EyeIcon } from '@/assets/icons'
import { IconWrapper } from '@/assets/icons/IconWrapper'
import { InputFactory } from '@/components/ui/input/input'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    eyeIcon: {
      control: false,
    },
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

export const Password: Story = {
  args: {
    error: false,
    eyeIcon: <IconWrapper color={'var(--color-dark-300)'} icon={<EyeIcon />} />,
    label: 'Input',
    placeholder: 'Input',
    title: 'Value',
    type: 'text',
    variant: 'default',
  },

  render: args => {
    return <InputFactory {...args} />
  },
}

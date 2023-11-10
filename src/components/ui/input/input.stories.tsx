import { ClosedEyeIcon, EyeIcon, SearchIcon } from '@/assets/icons'
import { IconWrapper } from '@/assets/icons/IconWrapper'
import { CrossIcon } from '@/assets/icons/components/CrossIcon'
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
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'active'],
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
    eyeIcon: <EyeIcon />,
    label: 'Input',
    placeholder: 'Input',
    title: 'Value',
    type: 'password',
    variant: 'default',
  },
  render: args => {
    const eyeIconColor =
      args.variant === 'disabled' ? 'var(--color-dark-300)' : 'var(--color-light-100)'

    const definedIcon =
      args.type === 'password' ? (
        <ClosedEyeIcon color={eyeIconColor} />
      ) : (
        <EyeIcon color={eyeIconColor} />
      )

    return <InputFactory {...args} eyeIcon={<IconWrapper icon={definedIcon} />} />
  },
}

export const Search: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    searchIcon: <SearchIcon />,
    title: 'Value',
    type: 'text',
    variant: 'default',
  },
  render: args => {
    const eyeIconColor =
      args.variant === 'disabled' ? 'var(--color-dark-300)' : 'var(--color-light-100)'

    const definedIcon = {
      leftIcon: <SearchIcon color={eyeIconColor} />,
      rightIcon: <CrossIcon color={eyeIconColor} />,
    }
    // args.type === 'active' ? (
    //  &&

    return <InputFactory {...args} searchIcon={<IconWrapper icon={definedIcon} />} />
  },
}

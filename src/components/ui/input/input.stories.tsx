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
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
    title: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
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
    errorMessage: 'Error!',
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
    errorMessage: 'Error!',
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
    errorMessage: 'Error!',
    leftIcon: <IconWrapper icon={<SearchIcon />} />,
    placeholder: 'Input',
    rightIcon: <IconWrapper icon={<CrossIcon />} />,
    title: 'Value',
    type: 'text',
    variant: 'default',
  },
  render: args => {
    let eyeIconColor

    switch (args.variant) {
      case 'disabled':
        eyeIconColor = 'var(--color-dark-300)'
        break
      case 'active':
        eyeIconColor = 'var(--color-light-100)'
        break
      default:
        eyeIconColor = 'var(--color-dark-100)'
    }

    const leftIcon = <IconWrapper icon={<SearchIcon color={eyeIconColor} />} />
    const rightIcon = <IconWrapper icon={<CrossIcon color={eyeIconColor} />} />

    return <InputFactory {...args} leftIcon={leftIcon} rightIcon={rightIcon} type={'text'} />
  },
}

import { CrossIcon, SearchIcon } from '@/assets'
import { InputFactory, InputProps } from '@/components'
import { Meta, StoryObj } from '@storybook/react'
import cn from 'classnames'

import styles from './input.module.scss'

const meta = {
  argTypes: {
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

const createInputProps = (args: InputProps) => {
  const disabled = args.variant === 'disabled'
  const error = args.variant === 'error'

  const inputStyles = cn({
    [styles.active]: args.variant === 'active',
    [styles.disabled]: args.variant === 'disabled',
    [styles.error]: args.variant === 'error',
    [styles.focus]: args.variant === 'focus',
    [styles.hover]: args.variant === 'hover',
    [styles['with-search-icon']]: args.leftIcon != undefined,
  })

  return {
    className: inputStyles,
    disabled,
    error,
    ...args,
  }
}

export const Input: Story = {
  args: {
    errorMessage: 'Error!',
    label: 'Input',
    placeholder: 'Input',
    title: 'Value',
    type: 'text',
    variant: 'default',
  },

  render: args => <InputFactory {...createInputProps(args)} type={'text'} />,
}

export const Password: Story = {
  args: {
    errorMessage: 'Error!',
    label: 'Input',
    placeholder: 'Input',
    title: 'Value',
    type: 'password',
    variant: 'default',
  },

  render: args => <InputFactory {...createInputProps(args)} rightIcon type={args.type} />,
}

export const Search: Story = {
  args: {
    errorMessage: 'Error!',
    placeholder: 'Input',
    title: 'Value',
    type: 'text',
    variant: 'default',
  },
  render: args => {
    const leftIcon = <SearchIcon />
    const rightIcon = <CrossIcon />

    return (
      <InputFactory
        {...createInputProps({ ...args, leftIcon })}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        type={'text'} // it must be overwritten
      />
    )
  },
}

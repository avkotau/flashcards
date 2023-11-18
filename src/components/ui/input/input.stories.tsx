import { SearchIcon } from '@/assets/icons'
import { CrossIcon } from '@/assets/icons/components/CrossIcon'
import { InputFactory } from '@/components/ui/input/input'
import { Meta, StoryObj } from '@storybook/react'
import cn from 'classnames'

import styles from '@/components/ui/input/input.module.scss'

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

export const Input: Story = {
  args: {
    errorMessage: 'Error!',
    label: 'Input',
    placeholder: 'Input',
    title: 'Value',
    type: 'text',
    variant: 'default',
  },
  render: args => {
    const disabled = args.variant === 'disabled'
    const error = args.variant === 'error'

    //input by default has style variant = default
    const inputStyles = cn({
      [styles.active]: args.variant === 'active',
      [styles.disabled]: args.variant === 'disabled',
      [styles.error]: args.variant === 'error',
      [styles.focus]: args.variant === 'focus',
      [styles.hover]: args.variant === 'hover',
    })

    return (
      <InputFactory
        {...args}
        className={inputStyles}
        disabled={disabled}
        error={error}
        type={'text'}
      />
    )
  },
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
  render: args => {
    const disabled = args.variant === 'disabled'
    const error = args.variant === 'error'

    //input by default has style variant = default
    const inputStyles = cn({
      [styles.active]: args.variant === 'active',
      [styles.disabled]: args.variant === 'disabled',
      [styles.error]: args.variant === 'error',
      [styles.focus]: args.variant === 'focus',
      [styles.hover]: args.variant === 'hover',
    })

    return (
      <InputFactory
        {...args}
        className={inputStyles}
        disabled={disabled}
        error={error}
        rightIcon
        type={args.type}
      />
    )
  },
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
    const disabled = args.variant === 'disabled'
    const error = args.variant === 'error'

    const leftIcon = <SearchIcon />
    const rightIcon = <CrossIcon />

    //input by default has style variant = default
    const inputStyles = cn({
      [styles.active]: args.variant === 'active',
      [styles.disabled]: args.variant === 'disabled',
      [styles.error]: args.variant === 'error',
      [styles.focus]: args.variant === 'focus',
      [styles.hover]: args.variant === 'hover',
      [styles['with-search-icon']]: leftIcon != undefined,
    })

    return (
      <InputFactory
        className={inputStyles}
        disabled={disabled}
        error={error}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        {...args}
        type={'text'} // it must be overwritten
      />
    )
  },
}

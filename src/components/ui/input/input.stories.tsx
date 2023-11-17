import { SearchIcon } from '@/assets/icons'
import { IconWrapper } from '@/assets/icons/IconWrapper'
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
  render: args => <InputFactory {...args} type={'text'} />,
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
    const inputStyles = cn(styles.input, {
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

    //input by default has style variant = default
    const inputStyles = cn(styles.input, {
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
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        {...args}
        type={'text'} // use after args because it must be overwritten
      />
    )
  },
}

export const ControlledSearch: Story = {
  args: {
    errorMessage: 'Error!',
    placeholder: 'Input',
    title: 'Value',
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

    //input by default has style variant = default
    const inputStyles = cn(styles.input, {
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
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        {...args}
        type={'text'} // use after args because it must be overwritten
      />
    )
  },
}

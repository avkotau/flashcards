import { ChangeEvent, FC, useState } from 'react'

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
  })

  return {
    className: inputStyles,
    disabled,
    error,
    ...args,
  }
}

const InputComponent: FC<InputProps & { type: string }> = (props: InputProps) => {
  debugger
  const { type, ...otherProps } = props
  const [value, setValue] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  const resetValue = () => {
    setValue('')
  }

  let leftIcon, rightIcon

  if (type === 'search') {
    leftIcon = <SearchIcon />
    rightIcon = <CrossIcon />
  }

  const inputProps = createInputProps({
    ...otherProps,
    leftIcon,
    onChange: handleInputChange,
    rightIcon: type === 'password' ? true : rightIcon,
    value,
  })

  return (
    <InputFactory
      {...inputProps}
      leftIcon={leftIcon}
      onChangeValueInput={resetValue}
      rightIcon={rightIcon}
      type={type}
    />
  )
}

export const Input: Story = {
  args: {
    errorMessage: 'Error!',
    label: 'Input',
    placeholder: 'Input',
    shortWidth: false,
    title: 'Value',
    type: 'text',
    variant: 'default',
  },

  render: args => <InputComponent {...args} type={'text'} />,
}

export const Password: Story = {
  args: {
    errorMessage: 'Error!',
    label: 'Input',
    placeholder: 'Password',
    shortWidth: false,
    title: 'Value',
    type: 'password',
    variant: 'default',
  },

  render: args => <InputComponent {...args} type={'password'} />,
}

export const Search: Story = {
  args: {
    errorMessage: 'Error!',
    placeholder: 'Input',
    shortWidth: false,
    title: 'Value',
    type: 'text',
    variant: 'default',
  },
  render: args => <InputComponent {...args} type={'search'} />,
}

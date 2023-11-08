import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import styles from './input.module.scss'

export type InputProps = {
  closedEyeIcon?: ReactNode
  error: boolean
  eyeIcon?: ReactNode
  label: string
  placeholder: string
  searchIcon?: ReactNode
  type: string
  variant?: 'active' | 'default' | 'disabled' | 'error' | 'focus' | 'hover'
} & ComponentPropsWithoutRef<'input'>

export const InputFactory: FC<InputProps> = ({
  closedEyeIcon,
  error,
  eyeIcon,
  label,
  placeholder,
  searchIcon,
  type,
  variant,
  ...restProps
}) => {
  //input by default has style variant = default
  const inputStyles = cn(styles.input, {
    [styles.active]: variant === 'active',
    [styles.disabled]: variant === 'disabled',
    [styles.error]: variant === 'error',
    [styles.focus]: variant === 'focus',
    [styles.hover]: variant === 'hover',
  })

  const inputElementStyles = {
    closedEyeIcon: '',
    eyeIcon: cn(styles.eyeIcon),
    inputContainer: cn(styles.inputContainer),
    searchIcon: '',
  }

  const isDisabled = variant === 'disabled'

  return (
    <div>
      <div>
        <Typography.Body1>{label}</Typography.Body1>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={inputStyles}
          disabled={isDisabled}
          placeholder={placeholder}
          type={type}
          {...restProps}
        />
        <IconButton className={inputElementStyles.eyeIcon} icon={eyeIcon} />
      </div>
    </div>
  )
}

type IconProps = {
  className?: string
  icon?: ReactNode
}

const IconButton: FC<IconProps> = ({ className, icon }) => {
  return <button className={className}>{icon}</button>
}

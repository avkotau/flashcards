import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import styles from './input.module.scss'

export type InputProps = {
  error?: boolean
  eyeIcon?: ReactNode
  label: string
  leftIcon?: ReactNode
  placeholder: string
  rightIcon?: ReactNode
  searchIcon?: ReactNode
  type: string
  variant?: 'active' | 'default' | 'disabled' | 'error' | 'focus' | 'hover'
} & ComponentPropsWithoutRef<'input'>

export const InputFactory: FC<InputProps> = ({
  error,
  eyeIcon,
  label,
  leftIcon,
  placeholder,
  rightIcon,
  searchIcon,
  type,
  variant,
  ...restProps
}) => {
  {
    // searchIcon && <IconButton className={styles.searchIcon} icon={searchIcon} />
  }

  //input by default has style variant = default
  const inputStyles = cn(styles.input, {
    [styles.active]: variant === 'active',
    [styles.disabled]: variant === 'disabled',
    [styles.error]: variant === 'error',
    [styles.focus]: variant === 'focus',
    [styles.hover]: variant === 'hover',
    [styles['with-search-icon']]: searchIcon != undefined,
  })

  const inputElementStyles = {
    closedEyeIcon: '',
    eyeIcon: cn(styles.eyeIcon),
    inputContainer: cn(styles.inputContainer),
    searchIcon: cn(styles.searchIcon),
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
        <IconButton className={inputElementStyles.searchIcon} icon={leftIcon} />
        <IconButton className={inputElementStyles.searchIcon} icon={rightIcon} />
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

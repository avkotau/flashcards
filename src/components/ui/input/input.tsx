import { ComponentPropsWithoutRef, FC, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import styles from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  eyeIcon?: ReactNode
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: 'active' | 'default' | 'disabled' | 'error' | 'focus' | 'hover' // вместо этого использовать type а это удалить
} & ComponentPropsWithoutRef<'input'>

export const InputFactory = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, eyeIcon, label, leftIcon, rightIcon, variant, ...restProps }, ref) => {
    //input by default has style variant = default
    const inputStyles = cn(styles.input, {
      [styles.active]: variant === 'active',
      [styles.disabled]: variant === 'disabled',
      [styles.error]: variant === 'error',
      [styles.focus]: variant === 'focus',
      [styles.hover]: variant === 'hover',
      [styles['with-search-icon']]: leftIcon != undefined,
    })

    const inputElementStyles = {
      crossIcon: cn(styles.crossIcon),
      eyeIcon: cn(styles.eyeIcon),
      inputContainer: cn(styles.inputContainer),
      leftIcon: cn(styles.searchIcon),
    }

    const isDisabled = variant === 'disabled'

    return (
      <div className={styles.layout}>
        <div>
          <Typography.Body1 className={styles.label}>{label}</Typography.Body1>
        </div>
        <div className={styles.inputContainer}>
          <input className={inputStyles} disabled={isDisabled} ref={ref} {...restProps} />
          <IconButton className={inputElementStyles.leftIcon} icon={leftIcon} />
          {variant === 'active' && (
            <IconButton className={inputElementStyles.crossIcon} icon={rightIcon} />
          )}
          <IconButton className={inputElementStyles.eyeIcon} icon={eyeIcon} />
        </div>
        {variant === 'error' && (
          <Typography.Caption className={styles.error}>{errorMessage}</Typography.Caption>
        )}
      </div>
    )
  }
)

type IconProps = {
  className?: string
  icon?: ReactNode
}

const IconButton: FC<IconProps> = ({ className, icon }) => {
  if (!icon) {
    return null
  }

  return <button className={className}>{icon}</button>
}

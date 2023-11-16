import { ComponentPropsWithoutRef, FC, ReactNode, forwardRef, useState } from 'react'

import { ClosedEyeIcon, EyeIcon } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import styles from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  eyeIcon?: ReactNode
  label?: string
  leftIcon?: ReactNode
  onChangeValue?: (value: string) => void
  onRightIconClickHandler?: () => void
  rightIcon?: ReactNode
  type: string
  variant?: 'active' | 'default' | 'disabled' | 'error' | 'focus' | 'hover'
} & ComponentPropsWithoutRef<'input'>

export const InputFactory = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      errorMessage,
      eyeIcon,
      label,
      leftIcon,
      onChange,
      onChangeValue,
      onRightIconClickHandler,
      rightIcon,
      type,
      variant,
      ...restProps
    },
    ref
  ) => {
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prevState => !prevState)
    }

    const inputElementStyles = {
      crossIcon: cn(styles.crossIcon),
      eyeIcon: cn(styles.eyeIcon),
      inputContainer: cn(styles.inputContainer),
      leftIcon: cn(styles.searchIcon),
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const dynamicIconForRight = selectAppropriateRightIcon(
      type || 'text',
      isPasswordVisible,
      rightIcon
    )

    const isDisabled = variant === 'disabled'

    return (
      <div className={styles.layout}>
        <div>
          <Typography.Body1 className={styles.label}>{label}</Typography.Body1>
        </div>
        <div className={styles.inputContainer}>
          <input disabled={isDisabled} ref={ref} type={type} {...restProps} />

          <IconButton className={inputElementStyles.leftIcon} icon={leftIcon} />

          <IconButton
            className={inputElementStyles.eyeIcon}
            icon={dynamicIconForRight}
            onClick={type === 'password' ? togglePasswordVisibility : onRightIconClickHandler}
          />
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
  onClick?: () => void
}

const IconButton: FC<IconProps> = ({ className, icon, onClick }) => {
  if (!icon) {
    return null
  }

  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  )
}

const selectAppropriateRightIcon = (
  inputType: string,
  isPasswordShown: boolean,
  defaultRightIcon: ReactNode
) => {
  if (inputType === 'password' && isPasswordShown) {
    return <EyeIcon color={'var(--color-light-100)'} />
  } else if (inputType === 'password' && !isPasswordShown) {
    return <ClosedEyeIcon color={'var(--color-light-100)'} />
  } else {
    return defaultRightIcon
  }
}

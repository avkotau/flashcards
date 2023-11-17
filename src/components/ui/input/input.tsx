import { ComponentPropsWithoutRef, FC, ReactNode, forwardRef, useState } from 'react'

import { ClosedEyeIcon, EyeIcon } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import styles from './input.module.scss'

export type InputProps = {
  disabled?: boolean
  error?: boolean
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
      disabled,
      error,
      errorMessage,
      eyeIcon,
      label,
      leftIcon,
      onChange,
      onChangeValue,
      onRightIconClickHandler,
      rightIcon,
      type,
      ...restProps
    },
    ref
  ) => {
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prevState => !prevState)
    }

    const classNames = {
      crossIcon: cn(styles.crossIcon),
      eyeIcon: cn(styles.eyeIcon),
      inputContainer: cn(styles.inputContainer),
      leftIcon: cn(styles.searchIcon),
      visibilityIcon: cn(disabled ? styles.disabled : styles.default),
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const dynamicIconForRight = selectAppropriateRightIcon(
      type || 'text',
      isPasswordVisible,
      rightIcon,
      classNames.visibilityIcon
    )
    const typeInput = isPasswordVisible && type === 'password' ? 'text' : type

    return (
      <div className={styles.layout}>
        <div>
          <Typography.Body1 className={styles.label}>{label}</Typography.Body1>
        </div>
        <div className={styles.inputContainer}>
          <input disabled={disabled} ref={ref} type={typeInput} {...restProps} />

          <IconButton className={classNames.leftIcon} icon={leftIcon} />

          <IconButton
            className={classNames.eyeIcon}
            disabled={disabled}
            icon={dynamicIconForRight}
            onClick={type === 'password' ? togglePasswordVisibility : onRightIconClickHandler}
          />
        </div>
        {error && <Typography.Caption className={styles.error}>{errorMessage}</Typography.Caption>}
      </div>
    )
  }
)

type IconProps = {
  className?: string
  disabled?: boolean
  icon?: ReactNode
  onClick?: () => void
}

const IconButton: FC<IconProps> = ({ className, disabled, icon, onClick }) => {
  if (!icon) {
    return null
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {icon}
    </button>
  )
}

const selectAppropriateRightIcon = (
  inputType: string,
  isPasswordShown: boolean,
  defaultRightIcon: ReactNode,
  styleIcon?: string
) => {
  if (inputType === 'password' && isPasswordShown) {
    return <EyeIcon color={styleIcon} />
  } else if (inputType === 'password' && !isPasswordShown) {
    return <ClosedEyeIcon color={styleIcon} />
  } else {
    return defaultRightIcon
  }
}

import { ChangeEvent, ComponentPropsWithoutRef, FC, ReactNode, forwardRef, useState } from 'react'

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
  onRightIconClickHandler?: () => void
  rightIcon?: ReactNode
  type: string
  variant?: string
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
      rightIcon,
      type,
      ...restProps
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prevState => !prevState)
    }
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      setInputValue(e.currentTarget.value)
    }

    const clearInputHandler = () => {
      setInputValue('')
    }

    const classNames = {
      crossIcon: cn(styles.crossIcon),
      eyeIcon: cn(rightIcon && leftIcon ? styles.crossIcon : styles.eyeIcon),
      inputContainer: cn(styles.inputContainer),
      leftIcon: cn(styles.searchIcon),
    }

    const dynamicIconForRight = selectAppropriateRightIcon(
      type || 'text',
      isPasswordVisible,
      rightIcon
    )
    const typeInput = isPasswordVisible && type === 'password' ? 'text' : type
    // Condition to determine which function to use as a click handler
    const rightIconClickHandler = type === 'password' ? togglePasswordVisibility : clearInputHandler

    return (
      <div className={styles.layout}>
        <div>
          <Typography.Body1 className={styles.label}>{label}</Typography.Body1>
        </div>
        <div className={styles.inputContainer}>
          <input
            disabled={disabled}
            onChange={onChangeValueHandler}
            ref={ref}
            type={typeInput}
            value={inputValue}
            {...restProps}
          />

          <IconButton className={classNames.leftIcon} disabled={disabled} icon={leftIcon} />

          {inputValue && (
            <IconButton
              className={classNames.eyeIcon}
              disabled={disabled}
              icon={dynamicIconForRight}
              onClick={rightIconClickHandler}
            />
          )}
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
  rightIcon: ReactNode
) => {
  if (inputType === 'password' && isPasswordShown) {
    return <EyeIcon />
  } else if (inputType === 'password' && !isPasswordShown) {
    return <ClosedEyeIcon />
  } else {
    return rightIcon
  }
}

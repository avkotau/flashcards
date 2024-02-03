import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { ClosedEyeIcon, EyeIcon } from '@/assets'
import { Typography } from '@/components'
import cn from 'classnames'

import styles from './input.module.scss'

export type InputProps = {
  className?: string
  containerStyle?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  eyeIcon?: ReactNode
  label?: string
  leftIcon?: ReactNode
  onChangeValue?: (value: string) => void
  onRightIconClickHandler?: () => void
  rightIcon?: ReactNode
  shortWidth?: boolean
  type?: string
  variant?: string
} & ComponentPropsWithoutRef<'input'>

export const InputFactory = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerStyle,
      disabled,
      error,
      errorMessage,
      eyeIcon,
      label,
      leftIcon,
      onChange,
      onChangeValue,
      rightIcon,
      shortWidth,
      type,
      value,
      ...restProps
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prevState => !prevState)
    }
    const onChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      if (onChangeValue) {
        onChangeValue(e.currentTarget.value)
      }
      onChangeValue?.(e.currentTarget.value)
    }

    const clearInputHandler = () => {
      if (onChangeValue) {
        onChangeValue('')
      }
    }

    const classNames = {
      crossIcon: cn(styles.crossIcon),
      eyeIcon: cn(rightIcon && leftIcon ? styles.crossIcon : styles.eyeIcon),
      inputContainer: cn(
        styles.inputContainer,
        { [styles.shortWidth]: shortWidth },
        containerStyle
      ),
      inputStyle: cn(
        styles.input,
        leftIcon && styles['with-search-icon'],
        className,
        error && styles.error
      ),
      layout: cn(styles.layout),
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
      <div className={classNames.layout}>
        <div>
          <Typography.Body1 className={styles.label}>{label}</Typography.Body1>
        </div>
        <div className={classNames.inputContainer}>
          <input
            className={classNames.inputStyle}
            disabled={disabled}
            onChange={onChangeValueInput}
            type={typeInput}
            value={value}
            {...restProps}
            ref={ref}
          />

          <IconButton className={classNames.leftIcon} disabled={disabled} icon={leftIcon} />

          {value && (
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

export const IconButton = forwardRef<ElementRef<'button'>, IconProps>(
  ({ className, disabled, icon, onClick, ...rest }, ref) => {
    if (!icon) {
      return null
    }

    const classNames = cn(styles.iconInsideBtn, className)

    return (
      <button className={classNames} disabled={disabled} onClick={onClick} ref={ref} {...rest}>
        {icon}
      </button>
    )
  }
)

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

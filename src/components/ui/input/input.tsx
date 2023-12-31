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
  onChangeValueInput?: (value: string) => void
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
      onChangeValueInput,
      rightIcon,
      shortWidth,
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
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      setInputValue(e.currentTarget.value)
      onChangeValueInput?.(e.currentTarget.value)
    }

    const clearInputHandler = () => {
      setInputValue('')
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
            onChange={onChangeValue}
            type={typeInput}
            value={inputValue}
            {...restProps}
            ref={ref}
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

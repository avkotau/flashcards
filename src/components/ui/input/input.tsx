import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import style from './input.module.scss'

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
  ...rest
}) => {
  //input by default has style variant = default
  const inputStyles = cn(style.input, {
    [style.active]: variant === 'active',
    [style.error]: variant === 'error',
    [style.focus]: variant === 'focus',
    [style.hover]: variant === 'hover',
  })

  return (
    <div>
      <div>
        <Typography.Body1>{label}</Typography.Body1>
      </div>
      <input className={inputStyles} placeholder={placeholder} type={type} {...rest} />
    </div>
  )
}

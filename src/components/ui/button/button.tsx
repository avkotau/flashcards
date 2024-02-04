import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  icon?: ReactNode
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

type RefType<T extends ElementType> = T extends ElementType
  ? ComponentPropsWithRef<T>['ref']
  : never

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: RefType<T>) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return (
      <Component
        className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
        ref={ref}
        {...rest}
      />
    )
  }
)

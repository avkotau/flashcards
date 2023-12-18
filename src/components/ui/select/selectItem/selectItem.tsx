import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Select from '@radix-ui/react-select'
import cn from 'classnames'

import s from './selectItem.module.scss'

export type SelectItemType = {
  title: string
  value: string
} & ComponentPropsWithoutRef<typeof Select.Item>

export const SelectItem = forwardRef<ElementRef<typeof Select.Item>, SelectItemType>(
  ({ children, className, ...props }, ref) => {
    const classNames = cn(s.selectItem, className)

    return (
      <Select.Item className={classNames} {...props} ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)

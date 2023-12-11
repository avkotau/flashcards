import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Select from '@radix-ui/react-select'
import cn from 'classnames'

import s from '@/components/ui/select/select.module.scss'

export type SelectItemType = {
  title: string
  value: string
} & ComponentPropsWithoutRef<typeof Select.Item>

export const SelectItem = forwardRef<ElementRef<typeof Select.Item>, SelectItemType>(
  ({ children, className, ...props }, ref) => {
    return (
      <Select.Item className={cn(s.selectItem, className)} {...props} ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDownIcon } from '@/assets'
import { Typography } from '@/components'
import * as Select from '@radix-ui/react-select'
import { Root } from '@radix-ui/react-select'
import cn from 'classnames'

import s from './select.module.scss'

import { SelectItem, SelectItemType } from './selectItem'

export type CustomSelectProps = {
  disabled?: boolean
  fullWidth?: boolean
  label?: string
  options: SelectItemType[]
  pageSize?: number
  placeholder?: string
} & ComponentPropsWithoutRef<typeof Root>

export const CustomSelect = forwardRef<ElementRef<typeof Root>, CustomSelectProps>(
  ({ disabled, fullWidth, label, onValueChange, options, pageSize, placeholder, ...rest }, ref) => {
    const classNames = {
      label: cn(s.label, disabled && s.disabled),
      trigger: cn(s.selectTrigger, fullWidth && s.fullWidth),
    }

    return (
      <div>
        <Select.Root disabled={disabled} onValueChange={onValueChange} {...rest}>
          {label && <Typography.Body1 className={classNames.label}>{label}</Typography.Body1>}
          <Select.Trigger aria-label={'Select page size'} className={classNames.trigger} ref={ref}>
            <Typography.Body1>
              <Select.Value placeholder={pageSize || placeholder} />
            </Typography.Body1>
            <Select.Icon className={s.selectIcon}>
              <ArrowDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content asChild className={s.selectContent} position={'popper'} ref={ref}>
              <Select.Viewport>
                {options.map(el => (
                  <SelectItem key={el.value} title={el.title} value={el.value}>
                    <Typography.Body1>{el.title}</Typography.Body1>
                  </SelectItem>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    )
  }
)

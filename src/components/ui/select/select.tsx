import { ElementRef, forwardRef } from 'react'

import { ArrowDownIcon } from '@/assets'
import { Typography } from '@/components'
import * as Select from '@radix-ui/react-select'
import { Root } from '@radix-ui/react-select'
import cn from 'classnames'

import s from './select.module.scss'

import { SelectItem, SelectItemType } from '../select/SelectItem'

type Props = {
  disabled?: boolean
  fullWidth?: boolean
  label?: string
  options: SelectItemType[]
}

export const CustomSelect = forwardRef<ElementRef<typeof Root>, Props>(
  ({ disabled, fullWidth, label = 'Select', options }, ref) => {
    const classNames = {
      label: cn(s.label, disabled && s.disabled),
      trigger: cn(s.selectTrigger, fullWidth && s.fullWidth),
    }

    return (
      <Select.Root disabled={disabled}>
        {label && <Typography.Body1 className={classNames.label}>{label}</Typography.Body1>}
        <Select.Trigger aria-label={'Food'} className={classNames.trigger} ref={ref}>
          <Typography.Body1>
            <Select.Value placeholder={'Select a ...'} />
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
    )
  }
)

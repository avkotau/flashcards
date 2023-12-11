import { ArrowDownIcon } from '@/assets'
import { Typography } from '@/components'
import * as Select from '@radix-ui/react-select'
import cn from 'classnames'

import s from './select.module.scss'

import { SelectItem, SelectItemType } from '../select/SelectItem'

type Props = {
  disabled: boolean
  label: string
  options: SelectItemType[]
}

export const CustomSelect = ({ disabled, label = 'Select', options }: Props) => {
  const classNames = {
    label: cn(s.label, disabled && s.disabled),
  }

  return (
    <>
      <Select.Root>
        {label && <Typography.Body1 className={classNames.label}>{label}</Typography.Body1>}
        <Select.Trigger aria-label={'Food'} className={s.selectTrigger} disabled={disabled}>
          <Typography.Body1>
            <Select.Value placeholder={'Select a ...'} />
          </Typography.Body1>
          <Select.Icon className={s.selectIcon}>
            <ArrowDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.selectContent}>
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
    </>
  )
}

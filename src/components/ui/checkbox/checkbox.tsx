import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange: (checked: boolean) => void
  required?: boolean
}

export const CustomCheckbox: FC<CheckboxProps> = ({
  checked,
  disabled,
  id,
  label,
  onChange,
  required,
}) => {
  return (
    <form>
      <div className={s.checkboxWrapper}>
        <Checkbox.Root
          checked={checked}
          className={s.root}
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
          required={required}
        >
          <Checkbox.Indicator className={s.indicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      {label}
    </form>
  )
}

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
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <Checkbox.Root
          checked={checked}
          className={s.CheckboxRoot}
          // defaultChecked
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
          required={required}
        >
          <Checkbox.Indicator className={s.CheckboxIndicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        {label}
      </div>
    </form>
  )
}

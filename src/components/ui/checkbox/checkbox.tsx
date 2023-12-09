import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'
import styles from '@/components/ui/input/input.module.scss'

export type CheckboxProps = {
  disabled?: boolean
  id: string
  label?: string
  name?: string
  onBlur?: () => void
  onChange?: () => void
  required?: boolean
}

export const CustomCheckbox = forwardRef<
  HTMLButtonElement,
  CheckboxProps & Omit<ComponentPropsWithoutRef<typeof Checkbox.Root>, 'ref'>
>((props, ref) => {
  const { defaultValue, disabled, id, label, name, onBlur, onChange, required } = props

  return (
    <div className={s.form}>
      <div className={s.checkboxWrapper}>
        <Checkbox.Root
          className={s.root}
          defaultChecked={!!defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={onBlur}
          onCheckedChange={onChange}
          ref={ref}
          required={required}
        >
          <Checkbox.Indicator className={s.indicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <label htmlFor={id}>
        <Typography.Caption className={styles.label}>{label}</Typography.Caption>
      </label>
    </div>
  )
})

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'
import styles from '@/components/ui/input/input.module.scss'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
  name: string
  onChange?: () => void
  required?: boolean
}

export const CustomCheckbox = forwardRef<
  HTMLButtonElement,
  CheckboxProps & Omit<ComponentPropsWithoutRef<typeof Checkbox.Root>, 'ref'>
>((props, ref) => {
  const { checked, defaultValue, disabled, label, name, onChange, required, ...rest } = props

  return (
    <div className={s.form}>
      <div className={s.checkboxWrapper}>
        <Checkbox.Root
          className={s.root}
          defaultChecked={!!defaultValue}
          disabled={disabled}
          name={name}
          onCheckedChange={onChange}
          ref={ref}
          required={required}
          {...rest}
        >
          <Checkbox.Indicator className={s.indicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <div>
        <Typography.Caption className={styles.label}>{label}</Typography.Caption>
      </div>
    </div>
  )
})

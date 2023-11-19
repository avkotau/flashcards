import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'
import styles from '@/components/ui/input/input.module.scss'

export type CheckboxProps = {
  label: string
}

export const CustomCheckbox = forwardRef<
  HTMLButtonElement,
  CheckboxProps & Omit<ComponentPropsWithoutRef<typeof Checkbox.Root>, 'onChange' | 'ref'>
>(({ label, ...rest }, ref) => {
  return (
    <form className={s.form}>
      <div className={s.checkboxWrapper}>
        <Checkbox.Root className={s.root} {...rest} ref={ref}>
          <Checkbox.Indicator className={s.indicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <div>
        <Typography.Caption className={styles.label}>{label}</Typography.Caption>
      </div>
    </form>
  )
})

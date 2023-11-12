import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  onChange: (checked: boolean) => void
}

export const CustomCheckbox = forwardRef<
  HTMLButtonElement,
  CheckboxProps & Omit<ComponentPropsWithoutRef<typeof Checkbox.Root>, 'ref'>
>(({ onChange, ...rest }, ref) => {
  return (
    <form>
      <div className={s.checkboxWrapper}>
        <Checkbox.Root className={s.root} onCheckedChange={onChange} {...rest} ref={ref}>
          <Checkbox.Indicator className={s.indicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  )
})

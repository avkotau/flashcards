import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { RadioItem } from '@/components/ui/radioGroup/radioItem'
import * as Radio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './radioGroup.module.scss'

import { RadioOption } from './radioGroup.stories'

export type RadioSelectorProps = {
  active: string
  onValueChange: (activeState: string) => void
  options: RadioOption[]
}

export type RadioGroupProps = RadioSelectorProps & ComponentPropsWithoutRef<typeof Radio.Root>
export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  ({ className, options, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.wrapper, className)

    return (
      <Radio.Root className={classNames} ref={ref} {...rest}>
        {options.map(item => (
          <RadioItem key={item.value} {...item} />
        ))}
      </Radio.Root>
    )
  }
)

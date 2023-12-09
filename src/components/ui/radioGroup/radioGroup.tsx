import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import * as Radio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './radioGroup.module.scss'

import { RadioOption } from './radioGroup.stories'
import { RadioItem } from './radioItem'

export type RadioSelectorProps = {
  onValueChange: (activeState: string) => void
  options: RadioOption[]
  value: string
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

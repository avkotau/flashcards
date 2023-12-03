import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './slider.module.scss'

export type SliderProps = { label?: string } & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, label, value, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.root, className)

    return (
      <div>
        <Typography.Body2>{label}</Typography.Body2>
        <div className={s.wrapper}>
          <Typography.Body1 className={s.value}>{value?.[0]}</Typography.Body1>
          <SliderPrimitive.Root className={classNames} ref={ref} value={value} {...rest}>
            <SliderPrimitive.Track className={s.track}>
              <SliderPrimitive.Range className={s.range} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb aria-label={'Value min'} className={s.thumb} />
            <SliderPrimitive.Thumb aria-label={'Value max'} className={s.thumb} />
          </SliderPrimitive.Root>
          <Typography.Body1 className={s.value}>{value?.[1]}</Typography.Body1>
        </div>
      </div>
    )
  }
)

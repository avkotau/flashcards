import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { Typography } from '@/components'
import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './slider.module.scss'

export type SliderProps = { title?: string } & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, title, value, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.root)

    return (
      <div className={className}>
        <Typography.Body2 className={s.title}>{title}</Typography.Body2>
        <div className={s.wrapperSlider}>
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

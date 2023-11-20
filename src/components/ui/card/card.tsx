import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import cn from 'classnames'

import s from '@/components/ui/card/card.module.scss'

export const Card = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const classes = cn(s.card, className)

    return <div className={classes} ref={ref} {...restProps}></div>
  }
)

import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { StarEmptyIcon, StarFilledIcon } from '@/assets'
import cn from 'classnames'

import s from './rating.module.scss'

type Props = {
  className?: string
  maxRating?: number
  rating: number
  size?: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = forwardRef<ElementRef<'div'>, Props>(
  ({ className, maxRating = 5, rating, size = 1, ...restProps }, ref): JSX.Element => {
    const stars = [...Array(maxRating)].map((_, index) => index + 1)

    const ratingClasses = cn(s.root, className)

    return (
      <div className={ratingClasses} ref={ref} {...restProps}>
        {stars.map((star, index) => {
          return rating >= star ? (
            <StarFilledIcon color={'var(--color-warning-300)'} key={index} size={size} />
          ) : (
            <StarEmptyIcon color={'var(--color-warning-300)'} key={index} size={size} />
          )
        })}
      </div>
    )
  }
)

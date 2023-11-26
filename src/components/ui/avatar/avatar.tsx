import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import cn from 'classnames'

import s from './avatar.module.scss'

export type Props = {
  image?: string
  size?: 'large' | 'small'
  userName: string
} & ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

export const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, Props>(
  ({ className, image, size = 'small', userName, ...rest }, ref): JSX.Element => {
    const classNames = {
      fallback: s.fallback,
      image: s.image,
      root: cn(s.root, s[size]),
    }

    const firstLetterOfName = userName[0].toUpperCase()

    return (
      <AvatarPrimitive.Root className={classNames.root} ref={ref} {...rest}>
        <AvatarPrimitive.Image alt={'Avatar'} className={classNames.image} src={image} />
        <AvatarPrimitive.Fallback className={classNames.fallback} delayMs={600}>
          <Typography.Large>{firstLetterOfName}</Typography.Large>
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    )
  }
)

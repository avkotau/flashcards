import { CSSProperties, ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { Typography } from '@/components'
import * as Tabs from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './tabs.module.scss'

export type TabsSwitcherProps = {
  className?: CSSProperties
  label?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>
export const TabsSwitcher = forwardRef<ElementRef<typeof Tabs.Root>, TabsSwitcherProps>(
  ({ children, className, label, ...rest }, ref): JSX.Element => {
    return (
      <Tabs.Root className={s.root} defaultValue={'allCards'} {...rest} ref={ref}>
        {label && <Typography.Body2>{label}</Typography.Body2>}
        <Tabs.List aria-label={'Manage your account'} className={cn(s.list, className)} loop>
          {children}
        </Tabs.List>
      </Tabs.Root>
    )
  }
)

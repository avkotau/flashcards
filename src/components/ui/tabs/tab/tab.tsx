import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tab.module.scss'

type Props = { children: ReactNode } & ComponentPropsWithoutRef<typeof Tabs.Trigger>

export const Tab = forwardRef<ElementRef<typeof Tabs.Trigger>, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <Tabs.Trigger className={s.trigger} {...rest} ref={ref}>
        {children}
      </Tabs.Trigger>
    )
  }
)

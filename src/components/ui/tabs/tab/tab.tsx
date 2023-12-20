import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tab.module.scss'

type Props = { disabled?: boolean } & ComponentPropsWithoutRef<typeof Tabs.Trigger>

export const Tab = forwardRef<ElementRef<typeof Tabs.Trigger>, Props>(
  ({ children, disabled, ...rest }, ref) => {
    return (
      <Tabs.Trigger className={s.trigger} disabled={disabled} {...rest} ref={ref}>
        {children}
      </Tabs.Trigger>
    )
  }
)

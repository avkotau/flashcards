import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef, useState } from 'react'

import { MoreOptionsIcon } from '@/assets'
import { IconButton, dropdownAnimations } from '@/components'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import s from './dropdown.module.scss'

export type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownRadix.Content>

export const Dropdown = forwardRef<ElementRef<typeof DropdownRadix.Content>, DropdownProps>(
  ({ align = 'end', children, className, trigger }, ref): JSX.Element => {
    const [open, setOpen] = useState(false)

    const classNames = {
      arrow: s.arrow,
      content: cn(s.content, className),
      trigger: s.trigger,
    }

    return (
      <DropdownRadix.Root onOpenChange={setOpen} open={open}>
        <DropdownRadix.Trigger asChild className={classNames.trigger}>
          {trigger ?? <IconButton icon={<MoreOptionsIcon />} />}
        </DropdownRadix.Trigger>
        <AnimatePresence>
          {open && (
            <DropdownRadix.Portal forceMount>
              <DropdownRadix.Content
                align={align}
                asChild
                className={classNames.content}
                forceMount
                onClick={event => event.stopPropagation()}
                ref={ref}
              >
                <motion.div animate={open ? 'open' : 'closed'} {...dropdownAnimations.menu}>
                  <div>{children}</div>
                  <DropdownRadix.Arrow className={classNames.arrow} />
                </motion.div>
              </DropdownRadix.Content>
            </DropdownRadix.Portal>
          )}
        </AnimatePresence>
      </DropdownRadix.Root>
    )
  }
)

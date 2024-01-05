import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import { dropdownAnimations } from '@/components'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { motion } from 'framer-motion'

import s from './dropdownItem.module.scss'

export type DropdownItemProps = {
  children: ReactNode
  className?: string
  onSelect?: (event: Event) => void
} & ComponentPropsWithoutRef<typeof DropdownRadix.Item>

export const DropdownItem = forwardRef<ElementRef<typeof DropdownRadix.Item>, DropdownItemProps>(
  ({ children, className, onSelect }: DropdownItemProps, ref): JSX.Element => {
    const selectHandler = (e: Event) => {
      onSelect && onSelect(e)
      e.preventDefault()
    }

    const classNames = {
      wrapper: cn(s.wrapper, className),
    }

    return (
      <DropdownRadix.Item className={classNames.wrapper} onSelect={selectHandler} ref={ref}>
        <motion.div {...dropdownAnimations.item}>{children}</motion.div>
      </DropdownRadix.Item>
    )
  }
)

import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import { DropdownItemProps, Typography, dropdownAnimations } from '@/components'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { motion } from 'framer-motion'

import s from './dropdownItem.module.scss'

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<typeof DropdownRadix.Item>

export const DropdownItemWithIcon = forwardRef<
  ElementRef<typeof DropdownRadix.Item>,
  DropdownItemWithIconProps
>(({ className, icon, onSelect, text, ...rest }, ref): JSX.Element => {
  const classNames = {
    wrapper: cn(s.wrapper, className),
  }

  const onSelectHandler = (e: Event) => {
    onSelect && onSelect(e)
    e.preventDefault()
  }

  return (
    <DropdownRadix.Item
      asChild
      className={classNames.wrapper}
      ref={ref}
      {...rest}
      onSelect={onSelectHandler}
    >
      <motion.div {...dropdownAnimations.item}>
        <div>{icon}</div>
        <Typography.Caption>{text}</Typography.Caption>
      </motion.div>
    </DropdownRadix.Item>
  )
})

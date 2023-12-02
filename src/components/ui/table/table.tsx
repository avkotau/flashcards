import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import s from './table.module.scss'

export const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.root, className)

    return <table className={classNames} ref={ref} {...rest} />
  }
)

export const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.root, className)

    return <thead className={classNames} ref={ref} {...rest} />
  }
)

export const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.root, className)

    return <tbody className={classNames} ref={ref} {...rest} />
  }
)

export const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.root, className)

    return <th className={classNames} ref={ref} {...rest} />
  }
)

export const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.root, className)

    return <tr className={classNames} ref={ref} {...rest} />
  }
)

export const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.root, className)

    return <td className={classNames} ref={ref} {...rest} />
  }
)

type Props = {
  children?: ReactNode
  className?: string
  text?: string
} & ComponentPropsWithoutRef<'table'>

export const Empty = forwardRef<ElementRef<'table'>, Props>(
  ({ children, className, text = 'Here empty', ...rest }, ref): JSX.Element => {
    const classNames = { root: cn(s.empty, className) }

    return (
      <div ref={ref} {...rest}>
        <Typography.Body1 className={classNames.root}>{text}</Typography.Body1>
        {children}
      </div>
    )
  }
)

export const Table = { Body, Cell, Empty, Head, HeadCell, Root, Row }

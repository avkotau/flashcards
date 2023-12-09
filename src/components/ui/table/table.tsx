import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components'
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
    const classNames = cn(s.head, className)

    return <thead className={classNames} ref={ref} {...rest} />
  }
)

export const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.body, className)

    return <tbody className={classNames} ref={ref} {...rest} />
  }
)

export const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.headCell, className)

    return <th className={classNames} ref={ref} {...rest} />
  }
)

export const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.row, className)

    return <tr className={classNames} ref={ref} {...rest} />
  }
)

export const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const classNames = cn(s.cell, className)

    return <td className={classNames} ref={ref} {...rest} />
  }
)

type Props = {
  children?: ReactNode
  className?: string
  text?: string
} & ComponentPropsWithoutRef<'table'>

export const EmptyPage = forwardRef<ElementRef<'table'>, Props>(
  (
    {
      children,
      className,
      text = 'This pack is empty. Click add new card to fill this pack',
      ...rest
    },
    ref
  ): JSX.Element => {
    const classNames = { title: cn(s.title, className), wrapper: cn(s.wrapper, className) }

    return (
      <div className={classNames.wrapper} ref={ref} {...rest}>
        <Typography.Body1 className={classNames.title}>{text}</Typography.Body1>
        {children}
      </div>
    )
  }
)

export const Table = { Body, Cell, EmptyPage, Head, HeadCell, Root, Row }

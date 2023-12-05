import { FC, ReactNode } from 'react'

import cn from 'classnames'
import { JSX } from 'react/jsx-runtime'

import s from './typography.module.scss'

import IntrinsicElements = JSX.IntrinsicElements

export type ReactTag = keyof IntrinsicElements

type TypographyProps<Ttag extends ReactTag> = {
  children: ReactNode
  className?: string
  component?: Ttag
}

const COMPONENTS = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  large: 'p',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
} as const

type Component = keyof typeof COMPONENTS

export const CreateTypographyComponent = <T extends ReactTag>(
  Tag: Component
): FC<TypographyProps<T>> => {
  return ({ children, className, component, ...rest }) => {
    const Component = COMPONENTS[Tag] || 'div'

    const classNames = cn(s[Tag], className)

    return (
      <Component className={classNames} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Body1: CreateTypographyComponent('body1'),
  Body2: CreateTypographyComponent('body2'),
  Caption: CreateTypographyComponent('caption'),

  H1: CreateTypographyComponent('h1'),
  H2: CreateTypographyComponent('h2'),
  H3: CreateTypographyComponent('h3'),
  Large: CreateTypographyComponent('large'),

  Link1: CreateTypographyComponent('link1'),
  Link2: CreateTypographyComponent('link2'),

  Overline: CreateTypographyComponent('overline'),
  Subtitle1: CreateTypographyComponent('subtitle1'),
  Subtitle2: CreateTypographyComponent('subtitle2'),
}

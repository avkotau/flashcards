import { FC, ReactNode } from 'react'

import { JSX } from 'react/jsx-runtime'

import IntrinsicElements = JSX.IntrinsicElements

export type ReactTag = keyof IntrinsicElements

type TypographyProps<Ttag extends ReactTag> = {
  children: ReactNode
  component?: Ttag
}

const COMPONENTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
} as const

type Component = keyof typeof COMPONENTS

export const CreateTypographyComponent = <T extends ReactTag>(
  KeyTagArg: Component
): FC<TypographyProps<T>> => {
  return ({ children, component, ...rest }) => {
    const Component = COMPONENTS[KeyTagArg] || 'div'

    return <Component {...rest}>{children}</Component>
  }
}

export const Typography = {
  H1: CreateTypographyComponent('h1'),
  H2: CreateTypographyComponent('h2'),
  H3: CreateTypographyComponent('h3'),
}

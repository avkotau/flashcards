import { FC, ReactNode } from 'react'

export type Props = {
  className?: string
  color?: string
  size?: number
}

export const IconWrapper: FC<{ icon: ReactNode } & Props> = ({ color, icon, size, ...rest }) => {
  return (
    <span
      aria-hidden={'true'}
      color={color}
      role={'img'}
      style={{
        color: color,
        display: 'inline-flex',
        fontSize: 'inherit',
        height: size,
        width: size,
      }}
      {...rest}
    >
      {icon}
    </span>
  )
}

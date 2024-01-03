import { FC, ReactNode } from 'react'

export type PropsIconWrapper = {
  className?: string
  color?: string
  size?: number
}

export const IconWrapper: FC<{ icon: ReactNode } & PropsIconWrapper> = ({
  color,
  icon,
  size,
  ...rest
}) => {
  return (
    <span
      aria-hidden={'true'}
      color={color}
      role={'img'}
      style={{
        color: color,
        display: 'inline-flex',
        fontSize: 'inherit',
        height: `${size}rem`,
        width: `${size}rem`,
      }}
      {...rest}
    >
      {icon}
    </span>
  )
}

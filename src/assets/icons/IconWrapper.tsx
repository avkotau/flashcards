import { FC, ReactNode } from 'react'

type Props = {
  color?: string
  size?: number
}

export const IconWrapper: FC<{ icon: ReactNode } & Props> = ({
  color,
  icon,
  size,
  ...restProps
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
        height: size,
        width: size,
      }}
      {...restProps}
    >
      {icon}
    </span>
  )
}

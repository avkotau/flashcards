import { ComponentPropsWithoutRef, JSX } from 'react'

import { Avatar, Typography } from '@/components'
import cn from 'classnames'

import s from './headerInfo.module.scss'

type Props = {
  avatar?: string
  className?: string
  email?: string
  name?: string
} & ComponentPropsWithoutRef<'div'>

export const HeaderInfo = ({
  avatar = 'avatar',
  className,
  email = 'email',
  name = 'name',
}: Props): JSX.Element => {
  const classNames = {
    wrapper: cn(s.wrapper, className),
  }

  return (
    <div className={classNames.wrapper}>
      <Avatar image={avatar} size={'small'} userName={name} />
      <div className={s.textWrapper}>
        <Typography.Subtitle1>{name}</Typography.Subtitle1>
        <Typography.Caption className={s.text}>{email}</Typography.Caption>
      </div>
    </div>
  )
}

import { JSX } from 'react'

import { ComeInIcon, EditIcon } from '@/assets'
import { Button, IconButton, Typography } from '@/components'
import { useLogoutMutation } from '@/services'

import s from './personalInfo.module.scss'

type Props = {
  email: string
  name: string
  onEditName: () => void
}

export const PersonalInfo = ({ email, name, onEditName }: Props): JSX.Element => {
  const [logout] = useLogoutMutation()

  const onLogout = () => {
    logout()
  }

  return (
    <div className={s.wrapper}>
      <div className={s.nameAndIconWrapper}>
        <Typography.H1>{name}</Typography.H1>
        <IconButton className={s.icon} icon={<EditIcon />} onClick={onEditName} />
      </div>
      <Typography.Body2 className={s.email}>{email}</Typography.Body2>
      <Button as={'button'} icon={<ComeInIcon />} onClick={onLogout} variant={'secondary'}>
        <Typography.Subtitle2>Logout</Typography.Subtitle2>
      </Button>
    </div>
  )
}

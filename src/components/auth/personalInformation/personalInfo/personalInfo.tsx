import { JSX } from 'react'

import { ComeInIcon } from '@/assets/icons'
import { EditIcon } from '@/assets/icons/components/editIcon'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import s from './personalInfo.module.scss'

type Props = {
  email: string
  name: string
}

export const PersonalInfo = ({ email, name }: Props): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <div className={s.nameAndIconWrapper}>
        <Typography.H1>{name}</Typography.H1>
        <IconButton className={s.icon} icon={<EditIcon />} />
      </div>
      <Typography.Body2 className={s.email}>{email}</Typography.Body2>
      <Button as={'button'} icon={<ComeInIcon />} variant={'secondary'}>
        <Typography.Subtitle2>Logout</Typography.Subtitle2>
      </Button>
    </div>
  )
}

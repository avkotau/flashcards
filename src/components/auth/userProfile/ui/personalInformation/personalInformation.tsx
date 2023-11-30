import { JSX, useState } from 'react'

import { EditIcon } from '@/assets/icons/components/editIcon'
import { EditName } from '@/components/auth/userProfile/ui/editName/editName'
import { EditProfileValues } from '@/components/auth/userProfile/ui/editName/editNameSchema'
import { PersonalInfo } from '@/components/auth/userProfile/ui/personalInfo/personalInfo'
import { Avatar } from '@/components/ui/avatar/avatar'
import { Card } from '@/components/ui/card'
import { IconButton } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import s from './personalInformation.module.scss'

type PersonalDataType = {
  avatar?: string
  email: string
  name: string
}

type Props = {
  data: PersonalDataType
  updateName: (data: EditProfileValues) => void
}

export const PersonalInformation = ({ data, updateName }: Props): JSX.Element => {
  const { avatar, email, name } = data
  const [edit, setEdit] = useState(false)

  const onSubmit = (data: EditProfileValues) => {
    updateName(data)
    setEdit(false)
  }
  const onEditName = () => {
    setEdit(true)
  }

  return (
    <Card className={s.wrapper}>
      <Typography.Large className={s.title}>Personal Information</Typography.Large>
      <div className={s.wrapperAvatar}>
        <Avatar image={avatar} size={'large'} userName={name} />
        <IconButton className={s.uploaderInAvatar} icon={<EditIcon />} />
      </div>

      {edit ? (
        <EditName initialName={{ name: name }} onSubmit={onSubmit}></EditName>
      ) : (
        <PersonalInfo email={email} name={name} onEditName={onEditName} />
      )}
    </Card>
  )
}

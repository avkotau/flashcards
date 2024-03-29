import { JSX, useState } from 'react'

import {
  AvatarUpload,
  Card,
  EditName,
  EditProfileValues,
  PersonalInfo,
  Typography,
} from '@/components'
import { BaseResponse } from '@/services'

import s from './personalInformation.module.scss'

type Props = {
  data: BaseResponse
  update: (name: EditProfileValues) => void
}

export const PersonalInformation = ({ data, update }: Props): JSX.Element => {
  const { avatar, email, name } = data

  const [edit, setEdit] = useState(false)

  const onSubmit = (name: EditProfileValues) => {
    update(name)
    setEdit(false)
  }

  const onEditName = () => {
    setEdit(true)
  }

  return (
    <Card className={s.wrapper}>
      <Typography.Large className={s.title}>Personal Information</Typography.Large>
      <AvatarUpload editable={!edit} image={avatar} userName={name} />
      {edit ? (
        <EditName initialName={{ name: name }} onSubmit={onSubmit}></EditName>
      ) : (
        <PersonalInfo email={email} name={name} onEditName={onEditName} />
      )}
    </Card>
  )
}

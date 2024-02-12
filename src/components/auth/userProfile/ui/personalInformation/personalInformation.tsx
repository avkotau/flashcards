import { JSX, useState } from 'react'

import { EditIcon } from '@/assets'
import { Avatar, Card, EditName, IconButton, PersonalInfo, Typography } from '@/components'
import { useMeQuery } from '@/services'

import s from './personalInformation.module.scss'

import { EditProfileValues } from '../editName/editNameSchema'

export type ProfileDataType = {
  avatar?: string
  email: string
  name: string
}

export const PersonalInformation = (): JSX.Element => {
  const { data } = useMeQuery()
  const { avatar, email, name } = data as ProfileDataType

  debugger
  const [edit, setEdit] = useState(false)

  const onSubmit = (data: EditProfileValues) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileValues])
    })
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

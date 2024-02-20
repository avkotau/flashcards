import { JSX } from 'react'

import { EditIcon } from '@/assets'
import { Avatar, IconButton, UploaderAvatar } from '@/components'
import { useUpdateProfileMutation } from '@/services'
import cn from 'classnames'

import s from './avatar.module.scss'

type Props = {
  className?: string
  editable?: boolean
  image?: string | undefined
  userName: string
}
export const AvatarUpload = ({ className, editable, image, userName }: Props): JSX.Element => {
  const [updateProfile] = useUpdateProfileMutation()
  const classNames = cn(s.root, className)

  const onLoadAvatar = (data: File) => {
    const formData = new FormData()

    formData.append('avatar', data)

    updateProfile(formData)
  }

  return (
    <div className={classNames}>
      <Avatar image={image} size={'large'} userName={userName} />
      {editable && (
        <UploaderAvatar className={s.wrapperAvatar} onLoadAvatar={onLoadAvatar}>
          <IconButton className={s.uploaderInAvatar} icon={<EditIcon />} />
        </UploaderAvatar>
      )}
    </div>
  )
}

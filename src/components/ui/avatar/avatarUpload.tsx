import { JSX } from 'react'

import { EditIcon } from '@/assets/icons/components/editIcon'
import { Avatar } from '@/components/ui/avatar/avatar'
import { IconButton } from '@/components/ui/input'
import cn from 'classnames'

import s from './avatar.module.scss'

type Props = {
  className?: string
  editable?: boolean
  image?: string | undefined
  userName: string
}
export const AvatarUpload = ({ className, editable, image, userName }: Props): JSX.Element => {
  const classNames = cn(s.root, className)

  return (
    <div className={classNames}>
      <Avatar image={image} size={'large'} userName={userName} />
      {editable && (
        <div className={s.wrapperAvatar}>
          <IconButton className={s.uploaderInAvatar} icon={<EditIcon />} />
        </div>
      )}
    </div>
  )
}

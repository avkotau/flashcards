import { ChangeEvent, ComponentPropsWithoutRef, JSX, ReactNode, useRef } from 'react'

import { Typography, UploadSchemaType, uploaderSchema } from '@/components'
import cn from 'classnames'

import s from './uploaderAvatar.module.scss'

type Props = {
  children: ReactNode
  className: string
  onLoadAvatar: (file: UploadSchemaType) => void
} & ComponentPropsWithoutRef<'input'>

export const UploaderAvatar = ({
  children,
  className,
  onLoadAvatar,
  ...rest
}: Props): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    uploaderSchema.parse(file)
    if (file) {
      onLoadAvatar(file)
    }
  }

  const classNames = cn(className)

  return (
    <Typography.Subtitle2 className={classNames} onClick={() => ref.current?.click()}>
      {children}
      <input className={s.fileInput} onChange={onChangeHandler} ref={ref} type={'file'} {...rest} />
    </Typography.Subtitle2>
  )
}

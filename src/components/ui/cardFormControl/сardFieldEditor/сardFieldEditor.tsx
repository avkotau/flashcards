import { Control } from 'react-hook-form'

import { Button, CardFormType, ControlledInput, Typography, UploaderAvatar } from '@/components'
import { ImageIcon } from '@radix-ui/react-icons'

import s from './cardFieldEditor.module.scss'

type Props = {
  control: Control<CardFormType>
  imageScr: null | string | undefined
  label: string
  name: 'answer' | 'question'
  onLoadPic: (data: File) => void
  selectFormat: string
}

export const CardFieldEditor = ({
  control,
  imageScr,
  label,
  name,
  onLoadPic,
  selectFormat,
}: Props) => {
  const buttonUploadText = imageScr ? 'Change Cover' : ' Add Cover'

  return (
    <>
      {selectFormat === 'text' && (
        <ControlledInput control={control} label={label} name={name} type={'text'} />
      )}
      {selectFormat === 'picture' && (
        <div>
          {imageScr && (
            <div className={s.imageBox}>
              <img alt={'Card pic'} src={imageScr} />
            </div>
          )}
          <UploaderAvatar className={s.uploader} onLoadAvatar={onLoadPic}>
            <Button fullWidth type={'button'} variant={'secondary'}>
              <ImageIcon />
              <Typography.Subtitle2>{buttonUploadText}</Typography.Subtitle2>
            </Button>
          </UploaderAvatar>
        </div>
      )}
    </>
  )
}

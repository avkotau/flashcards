import { useState } from 'react'
import { Control } from 'react-hook-form'

import { Button, CardFormType, ControlledInput, Typography, UploaderAvatar } from '@/components'
import { ImageIcon } from '@radix-ui/react-icons'

import s from '@/components/ui/deck/deckForm/deckForm.module.scss'

type Props = {
  control: Control<CardFormType>
  imageScr: null | string | undefined
  label: string
  name: 'answer' | 'question'
  onLoadPic: (data: File) => void
  selectFormat: string
}

export const CardFieldEditor = ({ control, imageScr, label, name, selectFormat }: Props) => {
  const [_, setCover] = useState<File | null>(null)

  const buttonUploadText = imageScr ? 'Change Cover' : ' Add Cover'
  const onLoadImg = (data: File) => {
    setCover(data)
  }

  return (
    <>
      {selectFormat === 'text' && (
        <ControlledInput control={control} label={label} name={name} type={'text'} />
      )}
      <UploaderAvatar className={s.uploader} onLoadAvatar={onLoadImg}>
        <Button fullWidth type={'button'} variant={'secondary'}>
          <ImageIcon />
          <Typography.Subtitle2>{buttonUploadText}</Typography.Subtitle2>
        </Button>
      </UploaderAvatar>
      <Typography.Subtitle2>{buttonUploadText}</Typography.Subtitle2>
    </>
  )
}

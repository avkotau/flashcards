import { Control } from 'react-hook-form'

import { CardFormType, ControlledInput, Typography } from '@/components'

type Props = {
  control: Control<CardFormType>
  imageScr: null | string | undefined
  label: string
  name: 'answer' | 'question'
  onLoadPic: (data: File) => void
  selectFormat: string
}

export const CardFieldEditor = ({ control, imageScr, label, name, selectFormat }: Props) => {
  const buttonUploadText = imageScr ? 'Change Cover' : ' Add Cover'

  return (
    <>
      {selectFormat === 'text' && (
        <ControlledInput control={control} label={label} name={name} type={'text'} />
      )}
      <Typography.Subtitle2>{buttonUploadText}</Typography.Subtitle2>
    </>
  )
}

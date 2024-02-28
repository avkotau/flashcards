import { JSX, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  Button,
  ControlledCheckbox,
  ControlledInput,
  Typography,
  UploaderAvatar,
} from '@/components'
import { CreateDeckArgs } from '@/services/flashCards.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { ImageIcon } from '@radix-ui/react-icons'

import s from './deckForm.module.scss'

import { DeckFormValues, addDeckSchema } from './deckFormSchema'

type Props = {
  isOpenModal: () => void
  onSubmit: (data: FormData) => void
  placeholder?: string
  valueBtn: string
  values?: CreateDeckArgs
}

export const DeckForm = ({
  isOpenModal,
  onSubmit,
  placeholder,
  valueBtn,
  values,
}: Props): JSX.Element => {
  const { control, handleSubmit } = useForm<DeckFormValues>({
    defaultValues: {
      isPrivate: values?.isPrivate,
      name: values?.name,
    },
    resolver: zodResolver(addDeckSchema),
  })

  const [cover, setCover] = useState<File | null>(null)

  const imageUrl = cover ? URL.createObjectURL(cover) : values?.cover

  const buttonUploadText = imageUrl ? 'Change cover' : ' Add cover'

  const submitHandler = (data: DeckFormValues) => {
    const formData = new FormData()

    formData.append('name', data?.name)
    formData.append('isPrivate', `${data?.isPrivate}`)

    cover && formData.append('cover', cover)
    onSubmit(formData)
  }

  const onLoadImg = (data: File) => {
    setCover(data)
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {imageUrl && (
        <div className={s.imageWrapper}>
          <img alt={'Deck cover'} src={imageUrl} />
        </div>
      )}
      <div className={s.wrapperBody}>
        <UploaderAvatar className={s.uploader} onLoadAvatar={onLoadImg}>
          <Button fullWidth type={'button'} variant={'secondary'}>
            <ImageIcon />
            <Typography.Subtitle2>{buttonUploadText}</Typography.Subtitle2>
          </Button>
        </UploaderAvatar>

        <ControlledInput
          control={control}
          label={'Name Deck'}
          name={'name'}
          placeholder={placeholder}
        />

        <ControlledCheckbox
          control={control}
          defaultValue={false}
          label={'Private deck'}
          name={'isPrivate'}
        />
      </div>
      <div className={s.wrapperBtns}>
        <Button onClick={isOpenModal} variant={'secondary'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
        <Button type={'submit'}>{valueBtn}</Button>
      </div>
    </form>
  )
}

import { JSX, forwardRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, ControlledInput, Typography } from '@/components'
import { CreateDeckArgs } from '@/services/flashCards.type'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './deckForm.module.scss'

import { DeckFormValues, addDeckSchema } from './deckFormSchema'

type Props = {
  isOpenModal: () => void
  onSubmit: (data: FormData) => void
  placeholder?: string
  valueBtn: string
  values?: CreateDeckArgs
}

export const DeckForm = forwardRef<HTMLFormElement, Props>(
  ({ isOpenModal, onSubmit, placeholder, valueBtn, values }: Props, ref): JSX.Element => {
    const { control, handleSubmit } = useForm<DeckFormValues>({
      resolver: zodResolver(addDeckSchema),
    })
    //add setCover
    const [cover] = useState<File | null>(null)

    const submitHandler = (data: DeckFormValues) => {
      const formData = new FormData()

      formData.append('name', data?.name)
      formData.append('isPrivate', `${data?.isPrivate}`)

      cover && formData.append('cover', cover)

      onSubmit(formData)
    }

    const imageUrl = cover ? URL.createObjectURL(cover) : values?.cover

    return (
      <form onSubmit={handleSubmit(submitHandler)} ref={ref}>
        {imageUrl && (
          <div>
            <img alt={'Deck cover'} src={imageUrl} />
          </div>
        )}
        <div className={s.wrapperBody}>
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
)

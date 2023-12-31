import { forwardRef } from 'react'
import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, ControlledInput, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './deckForm.module.scss'

import { DeckFormValues, addDeckSchema } from './deckFormSchema'

type Props = {
  isOpenModal: () => void
  onSubmit: (data: FormData) => void
  placeholder?: string
  valueBtn: string
}

export const DeckForm = forwardRef<HTMLFormElement, Props>(
  ({ isOpenModal, onSubmit, placeholder, valueBtn }: Props, ref) => {
    const { control, handleSubmit } = useForm<DeckFormValues>({
      resolver: zodResolver(addDeckSchema),
    })

    const submitHandler = (data: DeckFormValues) => {
      const formData = new FormData()

      formData.append('name', data?.name)
      formData.append('isPrivate', `${data?.isPrivate}`)
      debugger
      onSubmit(formData)
    }

    return (
      <form onSubmit={handleSubmit(submitHandler)} ref={ref}>
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

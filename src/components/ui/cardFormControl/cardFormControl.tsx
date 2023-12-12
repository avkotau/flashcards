import { useForm } from 'react-hook-form'

import { Button, ControlledInput, ControlledSelector, Typography } from '@/components'

import s from './cardFormControl.module.scss'

import { SelectItemType } from '../select/selectItem'

type Props = {
  initialState: SelectItemType[]
  isOpenModal: () => void
  onSubmit: (data: FormData) => void
}

export const CardFormControl = ({ initialState, isOpenModal, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      answer: 'answer1',
      question: 'question1',
      questionFormat: 'text',
    },
  })

  const onSubmitHandler = () => {
    const formData = new FormData()

    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledSelector control={control} name={'questionFormat'} options={initialState} />
      <ControlledInput control={control} label={'Question'} name={'question'} type={'text'} />
      <ControlledInput control={control} label={'Answer'} name={'answer'} type={'text'} />
      <div className={s.wrapperBtns}>
        <Button onClick={isOpenModal} variant={'secondary'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
        <Button onClick={isOpenModal}>{'Add New Card'}</Button>
      </div>
    </form>
  )
}

import { useForm } from 'react-hook-form'

import { Button, ControlledInput, ControlledSelector, Typography } from '@/components'

import s from './cardFormControl.module.scss'

import { SelectItemType } from '../select/selectItem'

type Props = {
  btnTitle: string
  initialState: SelectItemType[]
  isOpenModal: () => void
  onSubmit: (data: FormData) => void
  placeholder: string
}

export const CardFormControl = ({
  btnTitle,
  initialState,
  isOpenModal,
  onSubmit,
  placeholder,
}: Props) => {
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
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledSelector
        control={control}
        fullWidth
        name={'questionFormat'}
        options={initialState}
        placeholder={placeholder}
      />
      <ControlledInput control={control} label={'Question'} name={'question'} type={'text'} />
      <ControlledInput control={control} label={'Answer'} name={'answer'} type={'text'} />
      <div className={s.wrapperBtns}>
        <Button onClick={isOpenModal} variant={'secondary'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
        <Button onClick={isOpenModal}>{btnTitle}</Button>
      </div>
    </form>
  )
}

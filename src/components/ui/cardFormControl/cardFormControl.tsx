import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  Button,
  CardFieldEditor,
  CardFormType,
  ControlledInput,
  ControlledSelector,
  Typography,
  cardSchema,
} from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './cardFormControl.module.scss'

import { SelectItemType } from '../select/selectItem'

export type CardValues = {
  answer: string
  imageSrc: null | string | undefined
  question: string
  questionImg: null | string
}

type Props = {
  btnTitle: string
  cardValues?: CardValues
  initialState: SelectItemType[]
  isOpenModal: () => void
  onSubmit: (data: FormData) => void
  placeholder: string
}

export const CardFormControl = ({
  btnTitle,
  cardValues,
  initialState,
  isOpenModal,
  onSubmit,
  placeholder,
}: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      answer: cardValues?.answer || '',
      answerFormat: 'text',
      question: cardValues?.question || '',
      questionFormat: 'text',
    },
    resolver: zodResolver(cardSchema),
  })
  const [questionPic, setQuestionPic] = useState<File | null>(null)

  const questionImageSrc = questionPic ? URL.createObjectURL(questionPic) : cardValues?.questionImg

  const onSubmitHandler = (data: CardFormType) => {
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)

    onSubmit(formData)
  }

  const onLoadQuestionPic = (data: File) => {
    setQuestionPic(data)
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
      <CardFieldEditor
        control={control}
        imageScr={questionImageSrc}
        label={'Question'}
        name={'question'}
        onLoadPic={onLoadQuestionPic}
      />

      <ControlledInput control={control} label={'Answer'} name={'answer'} type={'text'} />
      <div className={s.wrapperBtns}>
        <Button onClick={isOpenModal} variant={'secondary'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
        <Button type={'submit'}>{btnTitle}</Button>
      </div>
    </form>
  )
}

import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { CardFormControl } from '@/components/ui/cardFormControl'
import { SelectItemType } from '@/components/ui/select/selectItem'
import { Card } from '@/features'

type Props = {
  btnTitle: string
  card: Card
  initialState: SelectItemType[]
  isOpenModalBtn: ReactNode
}

export const EditCardModal = ({
  btnTitle,
  card,
  initialState,
  isOpenModalBtn,
}: Props): JSX.Element => {
  const [open, setOpen] = useState(false)

  const { answer, answerImg, question, questionImg } = card
  const cardValues = { answer, answerImg, question, questionImg }

  const isOpenModal = () => {
    setOpen(false)
  }

  const onSubmit = () => {
    setOpen(false)
  }

  return (
    <Modal isOpenModalBtn={isOpenModalBtn} open={open} setOpen={setOpen} title={'Edit Card'}>
      <CardFormControl
        btnTitle={btnTitle}
        cardValues={cardValues}
        initialState={initialState}
        isOpenModal={isOpenModal}
        onSubmit={onSubmit}
        placeholder={'Edit a ...'}
      />
    </Modal>
  )
}

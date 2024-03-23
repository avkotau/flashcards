import { JSX, ReactNode, useState } from 'react'

import { CardFormControl, Modal } from '@/components'
import { SelectItemType } from '@/components/ui/select/selectItem'
import { Card, useUpdateCardMutation } from '@/features'

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

  const [updateCard] = useUpdateCardMutation()

  const { answer, answerImg, deckId, id, question, questionImg } = card
  const cardValues = { answer, answerImg, question, questionImg }

  const isOpenModal = () => {
    setOpen(false)
  }

  const onSubmit = (body: FormData) => {
    setOpen(false)
    updateCard({ body, cardId: id, deckId })
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

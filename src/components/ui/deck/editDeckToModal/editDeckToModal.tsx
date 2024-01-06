import { ReactNode, useState } from 'react'

import { Modal, useEditDeckMutation } from '@/components'
import { DeckForm } from '@/components/ui/deck'
import { CreateDeckArgs } from '@/services/flashCards.type'

type Props = {
  id: string
  isOpenModalBtn: ReactNode
  title?: string
  valueBtn: string
  values: CreateDeckArgs
}

export const EditDeckToModal = ({ id, isOpenModalBtn, title, valueBtn, values }: Props) => {
  const [open, setOpen] = useState(false)

  const [editDeck] = useEditDeckMutation()

  const currentPlaceholder = title === 'Edit Deck' ? 'Edit card name' : 'Enter new card name'

  const isOpenModal = () => {
    setOpen(false)
  }

  const editCallback = (data: FormData) => {
    editDeck({ body: data, id })
    isOpenModal()
  }

  return (
    <Modal isOpenModalBtn={isOpenModalBtn} open={open} setOpen={setOpen} title={'Edit Deck'}>
      <DeckForm
        isOpenModal={isOpenModal}
        onSubmit={editCallback}
        placeholder={currentPlaceholder}
        valueBtn={valueBtn}
        values={values}
      ></DeckForm>
    </Modal>
  )
}

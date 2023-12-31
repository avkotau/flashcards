import { ReactNode, useState } from 'react'

import { Modal, useCreateDeckMutation } from '@/components'
import { DeckForm } from '@/components/ui/deck'

type Props = {
  isOpenModalBtn: ReactNode
  title: string
  valueBtn: string
}

export const AddDeckToModal = ({ isOpenModalBtn, title, valueBtn }: Props) => {
  const [open, setOpen] = useState(false)
  const [createDeck] = useCreateDeckMutation()
  const currentPlaceholder = title === 'Edit Deck' ? 'Edit card name' : 'Enter new card name'

  const isOpenModal = () => {
    setOpen(false)
  }
  const createDeckCallback = (data: FormData) => {
    createDeck(data)
    isOpenModal()
  }

  return (
    <Modal isOpenModalBtn={isOpenModalBtn} open={open} setOpen={setOpen} title={title}>
      <DeckForm
        isOpenModal={isOpenModal}
        onSubmit={createDeckCallback}
        placeholder={currentPlaceholder}
        valueBtn={valueBtn}
      ></DeckForm>
    </Modal>
  )
}

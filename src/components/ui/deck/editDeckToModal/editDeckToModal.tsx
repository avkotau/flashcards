import { ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { DeckForm } from '@/components/ui/deck'

type Props = {
  isOpenModalBtn: ReactNode
  title: string
  valueBtn: string
}

export const EditDeckToModal = ({ isOpenModalBtn, title, valueBtn }: Props) => {
  const [open, setOpen] = useState(false)

  const currentPlaceholder = title === 'Edit Deck' ? 'Edit card name' : 'Enter new card name'

  const isOpenModal = () => {
    setOpen(false)
  }

  return (
    <Modal isOpenModalBtn={isOpenModalBtn} open={open} setOpen={setOpen} title={title}>
      <DeckForm
        isOpenModal={isOpenModal}
        placeholder={currentPlaceholder}
        valueBtn={valueBtn}
      ></DeckForm>
    </Modal>
  )
}

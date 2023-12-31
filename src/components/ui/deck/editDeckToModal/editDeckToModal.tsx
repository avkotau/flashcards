import { ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { DeckForm } from '@/components/ui/deck'
import { CreateDeckArgs } from '@/services/flashCards.type'

type Props = {
  data: CreateDeckArgs
  isOpenModalBtn: ReactNode
  title: string
  valueBtn: string
}

export const EditDeckToModal = ({ data, isOpenModalBtn, title, valueBtn }: Props) => {
  const [open, setOpen] = useState(false)

  const currentPlaceholder = title === 'Edit Deck' ? 'Edit card name' : 'Enter new card name'

  const isOpenModal = () => {
    setOpen(false)
  }

  const editCallback = () => {
    isOpenModal()
  }

  return (
    <Modal isOpenModalBtn={isOpenModalBtn} open={open} setOpen={setOpen} title={'Edit Deck'}>
      <DeckForm
        data={data}
        isOpenModal={isOpenModal}
        onSubmit={editCallback}
        placeholder={currentPlaceholder}
        valueBtn={valueBtn}
      ></DeckForm>
    </Modal>
  )
}

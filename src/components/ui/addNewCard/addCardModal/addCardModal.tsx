import { JSX, ReactNode, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CardFormControl, Modal } from '@/components'
import { SelectItemType } from '@/components/ui/select/selectItem'
import { useCreateCardMutation } from '@/features'

type Props = {
  btnTitle: string
  initialState: SelectItemType[]
  isOpenModalBtn: ReactNode
}

export const AddCardModal = ({ btnTitle, initialState, isOpenModalBtn }: Props): JSX.Element => {
  const [open, setOpen] = useState(false)
  const { id = '' } = useParams<{ id: string }>()
  const [createCard] = useCreateCardMutation()
  const isOpenModal = () => {
    setOpen(false)
  }

  const onSubmit = (body: FormData) => {
    createCard({ body, id })
    setOpen(false)
  }

  return (
    <Modal isOpenModalBtn={isOpenModalBtn} open={open} setOpen={setOpen} title={'Add New Card'}>
      <CardFormControl
        btnTitle={btnTitle}
        initialState={initialState}
        isOpenModal={isOpenModal}
        onSubmit={onSubmit}
        placeholder={'Select a ...'}
      />
    </Modal>
  )
}

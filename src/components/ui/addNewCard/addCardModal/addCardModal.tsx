import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'

import { CardFormControl } from '../../cardFormControl'
import { SelectItemType } from '../../select/selectItem'

type Props = {
  initialState: SelectItemType[]
  isOpenModalBtn: ReactNode
}

export const AddCardModal = ({ initialState, isOpenModalBtn }: Props): JSX.Element => {
  const [open, setOpen] = useState(false)

  const isOpenModal = () => {
    setOpen(false)
  }

  const onSubmit = () => {
    setOpen(false)
  }

  return (
    <Modal isOpenModalBtn={isOpenModalBtn} open={open} setOpen={setOpen} title={'Add New Card'}>
      <CardFormControl initialState={initialState} isOpenModal={isOpenModal} onSubmit={onSubmit} />
    </Modal>
  )
}

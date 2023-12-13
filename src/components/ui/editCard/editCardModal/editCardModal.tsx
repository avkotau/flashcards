import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { CardFormControl } from '@/components/ui/cardFormControl'
import { SelectItemType } from '@/components/ui/select/selectItem'

type Props = {
  btnTitle: string
  initialState: SelectItemType[]
  isOpenModalBtn: ReactNode
}

export const EditCardModal = ({ btnTitle, initialState, isOpenModalBtn }: Props): JSX.Element => {
  const [open, setOpen] = useState(false)

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
        initialState={initialState}
        isOpenModal={isOpenModal}
        onSubmit={onSubmit}
      />
    </Modal>
  )
}

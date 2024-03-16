import { JSX, ReactNode } from 'react'

import { AddCardModal } from '@/components'

type Props = {
  isOpenModalBtn: ReactNode
}
export const AddNewCard = ({ isOpenModalBtn }: Props): JSX.Element => {
  return (
    <AddCardModal
      btnTitle={'Add New Card'}
      initialState={[
        { title: 'Text', value: 'text' },
        { title: 'Picture', value: 'picture' },
      ]}
      isOpenModalBtn={isOpenModalBtn}
    />
  )
}

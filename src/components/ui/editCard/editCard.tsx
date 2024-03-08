import { JSX, ReactNode } from 'react'

import { Card } from '@/features'

import { EditCardModal } from './editCardModal'

type Props = {
  card: Card
  isOpenModalBtn: ReactNode
}
export const EditCard = ({ card, isOpenModalBtn }: Props): JSX.Element => {
  return (
    <EditCardModal
      btnTitle={'Save Changes'}
      card={card}
      initialState={[
        { title: 'Text', value: 'text' },
        { title: 'Picture', value: 'picture' },
      ]}
      isOpenModalBtn={isOpenModalBtn}
    />
  )
}

import { JSX, ReactNode } from 'react'

import { AddCardModal } from '@/components/ui/addNewCard/addCardModal'

import { SelectItemType } from '../select/selectItem'

type Props = {
  initialState: SelectItemType[]
  isOpenModalBtn: ReactNode
}
export const AddNewCard = ({ initialState, isOpenModalBtn }: Props): JSX.Element => {
  return <AddCardModal initialState={initialState} isOpenModalBtn={isOpenModalBtn} />
}

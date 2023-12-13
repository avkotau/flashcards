import { JSX, ReactNode } from 'react'

import { SelectItemType } from '@/components/ui/select/selectItem'

import { EditCardModal } from './editCardModal'

type Props = {
  initialState: SelectItemType[]
  isOpenModalBtn: ReactNode
}
export const EditCard = ({ initialState, isOpenModalBtn }: Props): JSX.Element => {
  return (
    <EditCardModal
      btnTitle={'Save Changes'}
      initialState={initialState}
      isOpenModalBtn={isOpenModalBtn}
    />
  )
}

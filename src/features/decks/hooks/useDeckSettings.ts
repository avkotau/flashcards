import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store'
import { Sort, decksSlice } from '@/components'

export const useDeckSettings = () => {
  const useAppDispatch: () => AppDispatch = useDispatch

  const dispatch = useAppDispatch()

  const selectSortOptions = (state: RootState) => state.decks.sortOptions
  const sortOptions = useSelector(selectSortOptions)
  const { setSortOptions } = decksSlice.actions

  const onChangeSort = (orderBy: Sort) => {
    dispatch(setSortOptions({ sortOptions: orderBy }))
  }

  return { onChangeSort, sortOptions }
}

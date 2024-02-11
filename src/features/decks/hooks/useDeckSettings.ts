import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store'
import { CardsCount, Sort, decksActions } from '@/components'
import { useMeQuery } from '@/services'

export const useDeckSettings = () => {
  const [sliderValue, setSliderValue] = useState<CardsCount>({
    max: undefined,
    min: 0,
  })

  const { data } = useMeQuery()

  const {
    resetFilter,
    setAuthorId,
    setCardsCount,
    setSearchByName,
    setSortOptions,
    setTabValue,
    setToFirstPage,
  } = decksActions

  const useAppDispatch: () => AppDispatch = useDispatch

  const dispatch = useAppDispatch()
  const selectSortOptions = (state: RootState) => state.decks.sortOptions
  const sortOptions = useSelector(selectSortOptions)

  const selectCardsCount = (state: RootState) => state.decks.cardsCount
  const cardsCount = useSelector(selectCardsCount)

  const selectSearchName = (state: RootState) => state.decks.searchName
  const searchName = useSelector(selectSearchName)

  const selectTabValue = (state: RootState) => state.decks.currentTab
  const tabValue = useSelector(selectTabValue)

  const selectAuthorId = (state: RootState) => state.decks.authorId
  const authorId = useSelector(selectAuthorId)

  const onChangeSort = (orderBy: Sort) => {
    dispatch(setSortOptions({ sortOptions: orderBy }))
  }

  const onClearFilter = () => {
    dispatch(resetFilter())
    setSliderValue({ max: undefined, min: 0 })
  }

  const onChangeSliderValue = (sliderValues: number[]) => {
    dispatch(setToFirstPage())
    setSliderValue({ max: sliderValues[1], min: sliderValues[0] })
    setCardsCount({ cardsCount: { max: sliderValues[1], min: sliderValues[0] } })
  }

  const onSearch = (searchName: string) => {
    dispatch(setSearchByName({ searchName }))
  }

  const onChangeTabValue = (tabValue: string) => {
    dispatch(setTabValue({ tabValue }))

    if (tabValue === 'my') {
      dispatch(setAuthorId({ authorId: data?.id }))
    } else {
      dispatch(setAuthorId({ authorId: undefined }))
    }
  }

  return {
    authorId,
    cardsCount,
    onChangeSliderValue,
    onChangeSort,
    onChangeTabValue,
    onClearFilter,
    onSearch,
    searchName,
    sliderValue,
    sortOptions,
    tabValue,
  }
}

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store'
import { CardsCount, Sort, decksActions } from '@/components'

export const useDeckSettings = () => {
  const [sliderValue, setSliderValue] = useState<CardsCount>({
    max: undefined,
    min: 0,
  })

  const {
    goToFirstPage,
    resetFilter,
    setCardsCount,
    setSearchByName,
    setSortOptions,
    setTabValue,
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

  const onChangeSort = (orderBy: Sort) => {
    dispatch(setSortOptions({ sortOptions: orderBy }))
  }

  const onClearFilter = () => {
    dispatch(resetFilter())
    setSliderValue({ max: undefined, min: 0 })
  }

  const onChangeSliderValue = (sliderValues: number[]) => {
    dispatch(goToFirstPage())
    setSliderValue({ max: sliderValues[1], min: sliderValues[0] })
    setCardsCount({ cardsCount: { max: sliderValues[1], min: sliderValues[0] } })
  }

  const onSearch = (searchName: string) => {
    dispatch(setSearchByName({ searchName }))
  }

  const onChangeTabValue = (tabValue: string) => {
    dispatch(setTabValue({ tabValue }))
  }

  return {
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

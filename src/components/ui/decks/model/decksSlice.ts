import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CardsCount = {
  max: number | undefined
  min: number
}

export const decksSlice = createSlice({
  initialState: {
    cardsCount: {
      max: undefined,
      min: 0,
    } as CardsCount,
    currentPage: 1,
    currentTab: 'all',
    pageSize: 10,
    search: '',
  },
  name: 'decks',
  reducers: {
    setCardsCount: (state, action: PayloadAction<{ cardsCount: CardsCount }>) => {
      state.cardsCount = action.payload.cardsCount
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
  },
})

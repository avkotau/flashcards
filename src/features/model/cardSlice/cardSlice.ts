import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PaginationOptions = { title: string; value: string }[]

export const cardsSlice = createSlice({
  initialState: {
    currentPage: 1,
    pageSize: 10,
    paginationOptions: [
      { title: '5', value: '5' },
      { title: '10', value: '10' },
      { title: '15', value: '15' },
    ] as PaginationOptions,
    question: '',
  },
  name: 'cards',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
  },
})
export const cardsActions = cardsSlice.actions

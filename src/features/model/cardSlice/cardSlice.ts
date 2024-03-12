import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PaginationOptions = { title: string; value: string }[]

export const cardsSlice = createSlice({
  initialState: {
    currentPage: 1,
    pageSize: 10,
    paginationOptions: [
      { title: '10', value: '10' },
      { title: '20', value: '20' },
      { title: '30', value: '30' },
    ] as PaginationOptions,
    question: '',
  },
  name: 'cards',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
  },
})
export const cardsActions = cardsSlice.actions

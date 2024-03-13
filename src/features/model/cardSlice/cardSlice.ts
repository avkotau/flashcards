import { Sort } from '@/components'
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
    sortParams: null as Sort,
  },
  name: 'cards',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setSortOrderBy: (state, action: PayloadAction<{ sortParams: Sort }>) => {
      state.sortParams = action.payload.sortParams
    },
  },
})
export const cardsActions = cardsSlice.actions

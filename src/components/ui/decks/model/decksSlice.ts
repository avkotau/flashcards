import { Sort } from '@/components/ui/table/tableHeader'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CardsCount = {
  max: number | undefined
  min: number
}

export const decksSlice = createSlice({
  initialState: {
    authorId: undefined as string | undefined,
    cardsCount: {
      max: undefined,
      min: 0,
    } as CardsCount,
    currentPage: 1,
    currentTab: 'all',
    pageSize: 10,
    searchName: '',
    sortOptions: undefined as Sort | undefined,
  },
  name: 'decks',
  reducers: {
    goToFirstPage: state => {
      state.currentPage = 1
    },
    resetFilter: state => {
      state.searchName = ''
      state.currentTab = 'all'
      state.authorId = undefined
      state.sortOptions = null
    },
    setAuthorId: (state, action: PayloadAction<{ authorId: string | undefined }>) => {
      state.authorId = action.payload.authorId
    },
    setCardsCount: (state, action: PayloadAction<{ cardsCount: CardsCount }>) => {
      state.cardsCount = action.payload.cardsCount
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setSearchByName: (state, action: PayloadAction<{ searchName: string }>) => {
      state.searchName = action.payload.searchName
    },
    setSortOptions: (state, action: PayloadAction<{ sortOptions: Sort | undefined }>) => {
      state.sortOptions = action.payload.sortOptions
    },
    setTabValue: (state, action: PayloadAction<{ currentTab: string }>) => {
      state.currentTab = action.payload.currentTab
    },
  },
})

export const decksActions = decksSlice.actions

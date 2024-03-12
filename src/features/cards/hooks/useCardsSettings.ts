import { RootState } from '@/app/store'
import { useAppDispatch, useAppSelector } from '@/common'
import { cardsActions } from '@/features'

export const useCardsSettings = () => {
  const dispatch = useAppDispatch()

  const selectCardsPaginationOptions = (state: RootState) => state.cards.paginationOptions
  const paginationOptions = useAppSelector(selectCardsPaginationOptions)

  const selectCardsCurrentPage = (state: RootState) => state.cards.currentPage
  const currentPage = useAppSelector(selectCardsCurrentPage)

  const selectCardsPageSize = (state: RootState) => state.cards.pageSize
  const itemsPerPage = useAppSelector(selectCardsPageSize)

  const selectCardsQuestion = (state: RootState) => state.cards.question
  const question = useAppSelector(selectCardsQuestion)

  const onChangePage = (currentPage: number) => {
    dispatch(cardsActions.setCurrentPage({ currentPage }))
  }

  const onChangePageSize = (value: string) => {
    dispatch(cardsActions.setPageSize({ pageSize: Number(value) }))
  }

  return {
    currentPage,
    itemsPerPage,
    onChangePage,
    onChangePageSize,
    paginationOptions,
    question,
  }
}

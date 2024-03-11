import { RootState } from '@/app/store'
import { useAppDispatch, useAppSelector } from '@/common'
import { cardsActions } from '@/features'

export const useCardsSettings = () => {
  const dispatch = useAppDispatch()

  const selectCardsCurrentPage = (state: RootState) => state.cards.currentPage
  const currentPage = useAppSelector(selectCardsCurrentPage)

  const selectCardsPageSize = (state: RootState) => state.cards.pageSize
  const itemsPerPage = useAppSelector(selectCardsPageSize)

  const selectCardsQuestion = (state: RootState) => state.cards.question
  const question = useAppSelector(selectCardsQuestion)

  const onChangePage = (currentPage: number) => {
    dispatch(cardsActions.setCurrentPage({ currentPage }))
  }

  return {
    currentPage,
    itemsPerPage,
    onChangePage,
    question,
  }
}

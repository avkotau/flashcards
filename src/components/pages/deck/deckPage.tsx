import { JSX } from 'react'
import { useParams } from 'react-router-dom'

import { SearchIcon } from '@/assets'
import {
  CardsTable,
  DeckPageHeader,
  GoBack,
  InputFactory,
  Pagination,
  Table,
  useGetDeckByIdQuery,
} from '@/components'
import { useCardsSettings, useGetCardsQuery } from '@/features'
import { useMeQuery } from '@/services'

import s from './deckPage.module.scss'

export const DeckPage = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()
  const { currentPage, itemsPerPage, onChangePage, onChangePageSize, paginationOptions, question } =
    useCardsSettings()

  const queryParams = {
    id,
    params: {
      currentPage,
      itemsPerPage,
      orderBy: '',
      question,
    },
  }

  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckByIdQuery({ id })
  const { data: deckData } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId

  const isEmptyCard = deck && deck.cardsCount > 0

  return (
    <div className={s.deckPageWrapper}>
      <GoBack className={s.linkGoBack} title={'Back to Decks List'} />
      {deck && <DeckPageHeader deck={deck} isOwner={isOwner} />}
      {isEmptyCard && (
        <>
          <InputFactory
            containerStyle={s.input}
            leftIcon={<SearchIcon />}
            placeholder={'Input search'}
            type={'search'}
          />
          <CardsTable cards={deckData?.items} isOwner={isOwner} />
          <Pagination
            currentPage={currentPage}
            onPageChange={onChangePage}
            onPageSizeChange={onChangePageSize}
            options={paginationOptions}
            pageSize={itemsPerPage}
            totalCount={deckData?.pagination.totalItems || 0}
            value={String(itemsPerPage)}
          />
        </>
      )}

      {!isOwner && !isEmptyCard && (
        <Table.EmptyPage text={'The deck is empty, please go back to learn other decks.'} />
      )}
    </div>
  )
}

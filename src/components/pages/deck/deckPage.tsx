import { JSX } from 'react'
import { useParams } from 'react-router-dom'

import { SearchIcon } from '@/assets'
import {
  CardsTable,
  DeckPageHeader,
  GoBack,
  InputFactory,
  Table,
  useGetDeckByIdQuery,
} from '@/components'
import { useGetCardsQuery } from '@/features'
import { useMeQuery } from '@/services'

export const DeckPage = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()

  const queryParams = {
    id,
    params: {
      currentPage: 1,
      itemsPerPage: 10,
      orderBy: '',
      question: '',
    },
  }

  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckByIdQuery({ id })
  const { data: deckData } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId

  const isEmptyCard = deck && deck.cardsCount > 0

  return (
    <>
      <GoBack title={'Back to Decks List'} />
      {deck && <DeckPageHeader deck={deck} isOwner={isOwner} />}
      {isEmptyCard && (
        <>
          <InputFactory leftIcon={<SearchIcon />} placeholder={'Input search'} type={'search'} />
          <CardsTable cards={deckData?.items} isOwner={isOwner} />
        </>
      )}

      {!isOwner && !isEmptyCard && (
        <Table.EmptyPage text={'The deck is empty, please go back to learn other decks.'} />
      )}
    </>
  )
}

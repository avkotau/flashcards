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
import { useMeQuery } from '@/services'

export const DeckPage = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckByIdQuery({ id })

  const isOwner = user?.id === deck?.userId

  const isEmptyCard = deck && deck.cardsCount > 0

  return (
    <>
      <GoBack title={'Back to Decks List'} />
      {deck && <DeckPageHeader deck={deck} isOwner={isOwner} />}
      {isEmptyCard && (
        <>
          <InputFactory leftIcon={<SearchIcon />} placeholder={'Input search'} type={'search'} />
          <CardsTable />
        </>
      )}

      {!isOwner && !isEmptyCard && (
        <Table.EmptyPage text={'The deck is empty, please go back to learn other decks.'} />
      )}
    </>
  )
}

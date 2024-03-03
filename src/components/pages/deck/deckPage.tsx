import { JSX } from 'react'
import { useParams } from 'react-router-dom'

import { SearchIcon } from '@/assets'
import { DeckPageHeader, GoBack, InputFactory, useGetDeckByIdQuery } from '@/components'
import { useMeQuery } from '@/services'

export const DeckPage = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckByIdQuery({ id })

  const isOwner = user?.id === deck?.userId

  return (
    <>
      <GoBack title={'Back to Decks List'} />
      <>
        <InputFactory leftIcon={<SearchIcon />} placeholder={'Input search'} type={'search'} />
        {deck && <DeckPageHeader deck={deck} isOwner={isOwner} />}
      </>
    </>
  )
}

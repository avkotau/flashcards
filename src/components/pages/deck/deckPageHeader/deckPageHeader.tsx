import { Link } from 'react-router-dom'

import { Routes } from '@/common'
import { AddNewCard, Button, Typography } from '@/components'
import { GetDeckResponse } from '@/services'

import s from './deckPageHeader.module.scss'

type Props = {
  deck: GetDeckResponse
  isEmptyCard: boolean | undefined
  isOwner: boolean
}

export const DeckPageHeader = ({ deck, isEmptyCard, isOwner }: Props) => {
  return (
    <div className={s.root}>
      <Typography.Large>{isOwner ? 'My Deck' : 'Friends Deck'}</Typography.Large>
      {isOwner && <AddNewCard isOpenModalBtn={<Button>Add New Card</Button>} />}
      {!isOwner && !isEmptyCard && (
        <Button as={Link} to={`${Routes.Decks}/${deck.id}/learn`}>
          <Typography.Subtitle2>Learn Deck</Typography.Subtitle2>
        </Button>
      )}
    </div>
  )
}

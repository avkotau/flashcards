import { Link } from 'react-router-dom'

import { Routes } from '@/common'
import { Button, Typography } from '@/components'
import { GetDeckResponse } from '@/services'

type Props = {
  deck: GetDeckResponse
  isOwner: boolean
}

export const DeckPageHeader = ({ deck }: Props) => {
  return (
    <div>
      <Button as={Link} to={`${Routes.Decks}/${deck.id}/learn`}>
        <Typography.Subtitle2>Learn Deck</Typography.Subtitle2>
      </Button>
    </div>
  )
}

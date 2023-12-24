import { JSX } from 'react'

import { AddDeckToModal, Button, Typography } from '@/components'

export const DecksPageHeader = (): JSX.Element => {
  return (
    <>
      <Typography.Large>Decks list</Typography.Large>
      <AddDeckToModal
        isOpenModalBtn={
          <Button>
            <Typography.Subtitle2>Add New Card</Typography.Subtitle2>
          </Button>
        }
        title={'Add New Deck'}
        valueBtn={'Add New Deck'}
      />
    </>
  )
}

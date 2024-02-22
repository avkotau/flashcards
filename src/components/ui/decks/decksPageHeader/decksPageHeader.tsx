import { JSX } from 'react'

import { AddDeckToModal, Button, Typography } from '@/components'

import s from './decksPageHeader.module.scss'

export const DecksPageHeader = (): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Typography.Large>Decks list</Typography.Large>
      <AddDeckToModal
        isOpenModalBtn={
          <Button>
            <Typography.Subtitle2>Add New Deck</Typography.Subtitle2>
          </Button>
        }
        title={'Add New Deck'}
        valueBtn={'Add New Deck'}
      />
    </div>
  )
}

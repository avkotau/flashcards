import { ReactNode, useState } from 'react'

import { Button, Modal, Typography } from '@/components'

import s from './deleteDeckToModal.module.scss'

type Props = {
  entityName: EntityType
  isOpenModalBtn: ReactNode
  onClick: () => void
  title: string
  value: string
  valueBtn: string
}

export const DeleteDeckToModal = ({
  entityName,
  isOpenModalBtn,
  onClick,
  title,
  value,
  valueBtn,
}: Props) => {
  const [open, setOpen] = useState(false)

  const isOpenModal = () => {
    setOpen(false)
  }

  const buttonClickHandler = () => {
    onClick()
    setOpen(false)
  }

  return (
    <Modal isOpenModalBtn={isOpenModalBtn} open={open} setOpen={setOpen} title={title}>
      <div className={s.wrapperBody}>
        <Typography.Body1>
          {/*  {`Do you really want to remove ${'Pack Name'}?*/}
          {/*All cards will be deleted.`}*/}
          {info(value, entityName)}
        </Typography.Body1>
      </div>
      <div className={s.wrapperBtns}>
        <Button onClick={isOpenModal} variant={'secondary'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
        <Button onClick={buttonClickHandler}>
          <Typography.Subtitle2>{valueBtn}</Typography.Subtitle2>
        </Button>
      </div>
    </Modal>
  )
}

type EntityType = 'cardName' | 'deckName'

const info = (value: string, entityName: EntityType) => {
  const text = {
    cardName: `Do you really want to remove ${value}?
          All cards will be deleted.`,
    deckName: `Do you really want to remove ${value}?
        Deck will be deleted.`,
  }

  return text[entityName]
}

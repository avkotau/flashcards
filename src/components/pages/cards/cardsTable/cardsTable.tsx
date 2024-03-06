import { JSX } from 'react'

import { formatDate } from '@/assets/utils'
import { Rating, Table, TableHeader, Typography, getCardsHeaderTableData } from '@/components'
import { Card } from '@/features'

import s from './cardsTable.module.scss'

type Props = {
  cards?: Card[]
  isOwner: boolean
}

export const CardsTable = ({ cards, isOwner }: Props): JSX.Element => {
  return (
    <Table.Root className={s.root}>
      <TableHeader titleColumns={getCardsHeaderTableData(isOwner)} />
      <Table.Body>
        {cards?.map(card => {
          return (
            <Table.Row key={card.id}>
              <Table.Cell className={s.question}>
                <div className={s.imageWrapper}>
                  {!!card.questionImg && <img alt={'Card question'} src={card.questionImg} />}
                  <Typography.Body2>{card.question}</Typography.Body2>
                </div>
              </Table.Cell>
              <Table.Cell className={s.answer}>
                <div className={s.imageBox}>
                  {!!card.answerImg && (
                    <img alt={'Card answer'} className={s.image} src={card.answerImg} />
                  )}
                  <Typography.Body2>{card.answer}</Typography.Body2>
                </div>
              </Table.Cell>
              <Table.Cell className={s.updated}>
                <Typography.Body2>{formatDate(card.updated)}</Typography.Body2>
              </Table.Cell>
              <Table.Cell>
                <Rating rating={card.grade} />
              </Table.Cell>
              <Table.Cell>
                <Typography.Body2>5</Typography.Body2>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}

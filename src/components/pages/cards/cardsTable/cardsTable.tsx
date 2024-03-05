import { JSX } from 'react'

import { Table, Typography } from '@/components'

import s from './cardsTable.module.scss'

type Props = {
  cards?: []
}

export const CardsTable = ({ cards }: Props): JSX.Element => {
  return (
    <Table.Root className={s.root}>
      <Table.Head />
      <Table.Body>
        {cards?.map(card => {
          return (
            <Table.Row key={card}>
              <Table.Cell className={s.question}>
                <Typography.Body2>1</Typography.Body2>
              </Table.Cell>
              <Table.Cell className={s.answer}>
                <Typography.Body2>2</Typography.Body2>
              </Table.Cell>
              <Table.Cell className={s.updated}>
                <Typography.Body2>3</Typography.Body2>
              </Table.Cell>
              <Table.Cell>
                <Typography.Body2>4</Typography.Body2>
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

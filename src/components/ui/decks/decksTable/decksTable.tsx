import { JSX } from 'react'
import { Link } from 'react-router-dom'

import { formatDate } from '@/assets/utils'
import { Routes } from '@/common'
import { DecksIcons, Table, Typography } from '@/components'
import { Sort, TableHeader, TableHeaderProps } from '@/components/ui/table/tableHeader'
import { GetDecksResponseItems } from '@/services/flashCards.type'

import s from './decksTable.module.scss'

type Props = {
  decksData: GetDecksResponseItems[]
  isDisabled: boolean
  onSort: (sort: Sort) => void
  sort: Sort | undefined
} & SortTitleProps

type SortTitleProps = {
  titleColumnsWithSort: TableHeaderProps[]
}
export const DecksTable = ({
  decksData,
  onSort,
  sort,
  titleColumnsWithSort,
}: Props): JSX.Element => {
  return (
    <>
      {!!decksData.length && (
        <Table.Root>
          <TableHeader onSort={onSort} sort={sort} titleColumns={titleColumnsWithSort} />
          <Table.Body>
            {decksData.map((item, index) => (
              <Table.Row key={item.name + index}>
                <Table.Cell>
                  <Link to={`${Routes.Decks}/${item.id}/cards`}>
                    <div className={s.img}>
                      {item.cover && <img alt={'Cover'} src={item.cover} />}
                      <Typography.Body2>{item.name}</Typography.Body2>
                    </div>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Typography.Body2>{item.cardsCount}</Typography.Body2>
                </Table.Cell>
                <Table.Cell>
                  <Typography.Body2>{formatDate(item.updated)}</Typography.Body2>
                </Table.Cell>
                <Table.Cell>
                  <Typography.Body2>{item.author.name}</Typography.Body2>
                </Table.Cell>
                <Table.Cell className={s.icon}>
                  <DecksIcons deck={item} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
      {!decksData?.length && <Table.EmptyPage />}
    </>
  )
}

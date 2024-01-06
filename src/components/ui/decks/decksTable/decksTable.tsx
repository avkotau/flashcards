import { JSX } from 'react'

import { formatDate } from '@/assets/utils'
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
    <Table.Root>
      <TableHeader onSort={onSort} sort={sort} titleColumns={titleColumnsWithSort} />
      <Table.Body>
        {!!decksData &&
          decksData.map((item, index) => (
            <Table.Row key={item.name + index}>
              <Table.Cell>
                <Typography.Body2>{item.name}</Typography.Body2>
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
              <Table.Cell className={s.cellIcon}>
                <DecksIcons deck={item} />
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  )
}

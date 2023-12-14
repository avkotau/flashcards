import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDownIcon, ArrowUpIcon } from '@/assets'
import { Table, Typography } from '@/components'

import s from './tableHeader.module.scss'

export type TableHeaderProps = {
  isSorted?: boolean
  key: string
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type Props = {
  onSort?: (sort: Sort) => void
  sort?: Sort
  titleColumns: TableHeaderProps[]
} & ComponentPropsWithoutRef<typeof Table.Head>

const useSortHandler =
  (sort: Sort | undefined, onSort: Props['onSort']) =>
  (key: string, isSorted: boolean = false) => {
    if (!onSort || !isSorted) {
      return
    }

    const newSort: Sort =
      sort?.key === key
        ? { direction: sort.direction === 'asc' ? 'desc' : 'asc', key }
        : { direction: 'asc', key }

    onSort(newSort)
  }

export const titleColumns: TableHeaderProps[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'createdByName',
    title: 'Created by',
  },
  {
    key: 'icons',
    title: '',
  },
]

export const TableHeader = forwardRef<ElementRef<typeof Table.Head>, Props>(
  ({ key, onSort, sort, style, title, titleColumns, ...rest }, ref) => {
    const handleSort = useSortHandler(sort, onSort)

    return (
      <Table.Head ref={ref} {...rest}>
        <Table.Row>
          {titleColumns.map(({ isSorted, key, title }) => {
            return (
              <Table.HeadCell key={key} onClick={() => handleSort(key, isSorted)}>
                <Typography.Subtitle2>
                  {title}
                  {sort?.key === key &&
                    key !== 'icons' &&
                    (sort.direction === 'asc' ? (
                      <ArrowUpIcon className={s.sortIcon} />
                    ) : (
                      <ArrowDownIcon className={s.sortIcon} />
                    ))}
                </Typography.Subtitle2>
              </Table.HeadCell>
            )
          })}
        </Table.Row>
      </Table.Head>
    )
  }
)

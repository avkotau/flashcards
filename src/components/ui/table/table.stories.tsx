import { CSSProperties, useState } from 'react'

import { DeleteIcon } from '@/assets/icons/components/deleteIcon'
import { EditIcon } from '@/assets/icons/components/editIcon'
import { PlayIcon } from '@/assets/icons/components/playIcon'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/input'
import { Sort, TableHeader, TableHeaderProps } from '@/components/ui/table/TableHeader'
import { Table } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta

type Story = StoryObj<typeof meta>

const titleColumns: TableHeaderProps[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updatedDate',
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
const data = [
  {
    cardsCount: 3,
    createdByName: 'William Shakespeare',
    name: 'Book 1',
    updatedDate: '10.12.2023',
  },
  {
    cardsCount: 1,
    createdByName: 'Charles Dickens',
    name: 'Book 2',
    updatedDate: '04.12.2023',
  },
  {
    cardsCount: 5,
    createdByName: 'Jane Austen',
    name: 'Book 3',
    updatedDate: '03.12.2023',
  },
  {
    cardsCount: 4,
    createdByName: 'George Orwell',
    name: 'Book 4',
    updatedDate: '01.12.2023',
  },
]

type DataItem = {
  cardsCount: number
  createdByName: string
  name: string
  updatedDate: string
}

const getSortedData = (data: DataItem[], sort: Sort) => {
  if (!sort || !sort.key) {
    return data
  }
  debugger

  return [...data].sort((a, b) => {
    const key = sort.key as keyof DataItem
    const valA = a[key]
    const valB = b[key]

    if (valA < valB) {
      debugger

      return sort.direction === 'asc' ? -1 : 1
    }
    if (valA > valB) {
      debugger

      return sort.direction === 'asc' ? 1 : -1
    }

    return 0
  })
}

const TableStory = () => {
  const [sort, setSort] = useState<Sort | null>(null)
  const handleSortChange = (newSort: Sort) => {
    setSort(newSort)
  }

  const titleColumnsWithSort = titleColumns.map(column => ({
    ...column,
    isSorted: true,
  }))

  const sortedData = getSortedData(data, sort)

  return (
    <Table.Root>
      <TableHeader onSort={handleSortChange} sort={sort} titleColumns={titleColumnsWithSort} />
      <Table.Body>
        {sortedData.map(item => (
          <Table.Row key={item.name}>
            <Table.Cell>
              <Typography.Body2>{item.name}</Typography.Body2>
            </Table.Cell>
            <Table.Cell>
              <Typography.Body2>{item.cardsCount}</Typography.Body2>
            </Table.Cell>
            <Table.Cell>
              <Typography.Body2>{item.updatedDate}</Typography.Body2>
            </Table.Cell>
            <Table.Cell>
              <Typography.Body2>{item.createdByName}</Typography.Body2>
            </Table.Cell>
            <Table.Cell>
              <IconButton icon={<PlayIcon />} />
              <IconButton icon={<EditIcon />} />
              <IconButton icon={<DeleteIcon />} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export const Default: Story = {
  render: () => <TableStory />,
}

export const EmptyPage: Story = {
  render: () => {
    const wrapper: CSSProperties = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.8rem',
      height: '100vh',
      justifyContent: 'center',
    }

    return (
      <div style={wrapper}>
        <Table.EmptyPage />
        <Button>Add New Card</Button>
      </div>
    )
  },
}

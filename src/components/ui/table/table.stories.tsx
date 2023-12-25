import { CSSProperties, FC, useState } from 'react'

import { DeleteIcon, EditIcon, PlayIcon } from '@/assets'
import { Button, IconButton, Table, Typography } from '@/components'
import { Sort, TableHeader, titleColumns } from '@/components/ui/table/tableHeader'
import { GetDecksResponseItems } from '@/services/flashCards.type'
import { Meta, StoryObj } from '@storybook/react'

import { data, getSortedData } from './dataSorting'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta

type Story = StoryObj<typeof meta>

type TableStoryProps = {
  data: GetDecksResponseItems[]
  getSortedData: (data: GetDecksResponseItems[], sort: Sort | null) => GetDecksResponseItems[]
}

const TableStory: FC<TableStoryProps> = ({ data, getSortedData }) => {
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
              <Typography.Body2>{item.updated}</Typography.Body2>
            </Table.Cell>
            <Table.Cell>
              <Typography.Body2>{item.author.name}</Typography.Body2>
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
  //use only for stories
  render: () => <TableStory data={data as GetDecksResponseItems[]} getSortedData={getSortedData} />,
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

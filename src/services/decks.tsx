import { useEffect, useState } from 'react'

import { Table } from '@/components'
import { Button } from '@/components/ui/button'
import { Sort, TableHeader, titleColumns } from '@/components/ui/table/tableHeader'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/deckServices'
import { GetDecksResponseItems } from '@/services/flashCards.type'

export type DataItem = {
  cardsCount: number
  createdByName: string
  name: string
  updated: string
}

const getSortedData = (data: any, sort: Sort) => {
  if (!sort || !sort.key) {
    return data
  }

  return [...data].sort((a, b) => {
    const key = sort.key as keyof DataItem

    let valA = a[key]
    let valB = b[key]

    if (key === 'createdByName') {
      valA = a.author.name
      valB = b.author.name
    }

    if (valA < valB) {
      return sort.direction === 'asc' ? -1 : 1
    }
    if (valA > valB) {
      return sort.direction === 'asc' ? 1 : -1
    }

    return 0
  })
}

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [open, setOpen] = useState(false)

  const [sort, setSort] = useState<Sort | null>(null)
  const { data, error, isLoading } = useGetDecksQuery({
    currentPage,
  })

  const handleSortChange = (newSort: Sort) => {
    debugger
    setSort(newSort)
  }

  const titleColumnsWithSort = titleColumns.map(column => ({
    ...column,
    isSorted: true,
  }))

  const sortedData = getSortedData(data?.items, sort)

  useEffect(() => {
    setOpen(open)
  }, [open])

  if (error) {
    const errorMessage = 'message' in error ? error.message : 'Unknown error'

    return (
      <>
        <Typography.H1>Error</Typography.H1>
        <Typography.H3>{errorMessage}</Typography.H3>
      </>
    )
  }
  if (isLoading) {
    return <Typography.H1>...isLoading</Typography.H1>
  }

  return (
    <div>
      <h2>current page: {data?.pagination?.currentPage}</h2>
      {!!sortedData?.length && (
        <Table.Root>
          <TableHeader
            onSort={handleSortChange}
            sort={sort}
            titleColumns={titleColumnsWithSort}
          ></TableHeader>
          <Table.Body>
            {sortedData?.map((deck: GetDecksResponseItems) => {
              return (
                <Table.Row key={deck?.id}>
                  <Table.Cell>
                    <Typography.Body2>{deck?.name}</Typography.Body2>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography.Body2>{deck?.cardsCount}</Typography.Body2>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography.Body2>
                      {new Date(deck?.updated).toLocaleDateString()}
                    </Typography.Body2>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography.Body2>{deck?.author?.name}</Typography.Body2>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      )}
      {createArray(1, data?.pagination?.totalPages ?? 0).map(num => {
        return (
          <Button key={num} onClick={() => setCurrentPage(num)}>
            {num}
          </Button>
        )
      })}
    </div>
  )
}

function createArray(startNumber: number, length: number) {
  return Array.from({ length }, (_, index) => startNumber + index)
}

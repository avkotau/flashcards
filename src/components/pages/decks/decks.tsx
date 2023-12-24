import { useEffect, useState } from 'react'

import { DecksTable, Pagination } from '@/components'
import { useGetDecksQuery } from '@/components/ui/decks/model/deckApi'
import { PanelControl } from '@/components/ui/panelControl'
import { DataItem } from '@/components/ui/table/dataSorting'
import { Sort, titleColumns } from '@/components/ui/table/tableHeader'
import { Typography } from '@/components/ui/typography'

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
  const [pageSize, setPageSize] = useState(10)

  const [currentPage, setCurrentPage] = useState(1)
  const [open, setOpen] = useState(false)

  const [sort, setSort] = useState<Sort | null>(null)

  const [inputValue, setValue] = useState('')
  const [sliderData, setSliderData] = useState([1, 15])

  const onClearFilter = () => {
    setValue('')
    setSliderData([1, 15])
  }

  const { data, error, isLoading } = useGetDecksQuery({
    currentPage,
    itemsPerPage: pageSize,
  })
  const totalItemsCount = data?.pagination?.totalItems ?? 0

  const handlePageSizeChange = (newPageSize: string) => {
    setCurrentPage(1) // Reset current page to first
    setPageSize(Number(newPageSize)) // Update page size
  }

  const pageOptions = [
    { title: '10', value: '10' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ]

  const handleSortChange = (newSort: Sort) => {
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

  const loading = false

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
      <PanelControl
        inputValue={inputValue}
        maxSliderValue={15}
        minSliderValue={1}
        onChangeSliderValue={setSliderData}
        onChangeValueInput={setValue}
        onClearFilter={onClearFilter}
        sliderData={sliderData}
        sliderTitle={'Number of cards'}
        tabLabel={'Show packs cards'}
      />
      <h2>current page: {data?.pagination?.currentPage}</h2>
      <DecksTable
        decksData={sortedData}
        isDisabled={loading}
        onSort={handleSortChange}
        sort={sort}
        titleColumnsWithSort={titleColumnsWithSort}
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={page => setCurrentPage(page)}
        onPageSizeChange={handlePageSizeChange} // Page resize handler
        options={pageOptions}
        pageSize={pageSize}
        totalCount={totalItemsCount}
      />
    </div>
  )
}

import { useEffect, useState } from 'react'

import { DecksPageHeader, DecksTable, Pagination } from '@/components'
import { useGetDecksQuery } from '@/components/ui/decks/model/deckApi'
import { PanelControl } from '@/components/ui/panelControl'
import { getSortedData } from '@/components/ui/table/dataSorting'
import { Sort, titleColumns } from '@/components/ui/table/tableHeader'
import { Typography } from '@/components/ui/typography'

import s from './decks.module.scss'

export const pageOptions = [
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
  { title: '50', value: '50' },
  { title: '100', value: '100' },
]

export const Decks = () => {
  const [pageSize, setPageSize] = useState(10)

  const [currentPage, setCurrentPage] = useState(1)
  const [open, setOpen] = useState(false)

  const [sort, setSort] = useState<Sort | null>(null)

  const [inputValue, setValue] = useState('')
  const [sliderData, setSliderData] = useState([0, 15])

  const onClearFilter = () => {
    setValue('')
    setSliderData([0, 15])
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

  const handleSortChange = (newSort: Sort) => {
    setSort(newSort)
  }

  const titleColumnsWithSort = titleColumns.map(column => ({
    ...column,
    isSorted: true,
  }))

  const sortedData = getSortedData(data?.items || [], sort)

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
    <div className={s.decksWrapper}>
      <DecksPageHeader />
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

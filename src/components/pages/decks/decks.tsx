import { useEffect, useState } from 'react'

import { DecksPageHeader, DecksTable, Pagination } from '@/components'
import { useGetDecksQuery } from '@/components/ui/decks/model/deckApi'
import { PanelControl } from '@/components/ui/panelControl'
import { getSortedData } from '@/components/ui/table/dataSorting'
import { Sort, titleColumns } from '@/components/ui/table/tableHeader'
import { Typography } from '@/components/ui/typography'
import { useDeckSettings } from '@/features'

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

  const {
    cardsCount,
    onChangeSliderValue,
    onChangeSort,
    onChangeTabValue,
    onClearFilter,
    onSearch,
    searchName,
    sliderValue,
    sortOptions,
    tabValue,
  } = useDeckSettings()

  const formattedSort = (newSort: Sort | undefined) => {
    if (!newSort) {
      return undefined
    }
    if (newSort?.key === 'author') {
      return `author.name-${newSort?.direction}`
    }

    return `${newSort?.key}-${newSort?.direction}`
  }

  const sortString = formattedSort(sortOptions)

  const { currentData, data, error, isLoading } = useGetDecksQuery({
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: sliderValue.max,
    minCardsCount: sliderValue.min,
    name: searchName,
    orderBy: sortString,
  })

  const decks = currentData ?? data
  const totalItemsCount = decks?.pagination?.totalItems ?? 0

  const handlePageSizeChange = (newPageSize: string) => {
    setCurrentPage(1) // Reset current page to first
    setPageSize(Number(newPageSize)) // Update page size
  }

  const titleColumnsWithSort = titleColumns.map(column => ({
    ...column,
    isSorted: true,
  }))

  const sortedData = getSortedData(decks?.items || [], sortOptions)

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
        inputValue={searchName}
        maxSliderValue={Number(data?.maxCardsCount)}
        minSliderValue={cardsCount.min}
        onChangeSliderValue={onChangeSliderValue}
        onChangeTabValue={onChangeTabValue}
        onChangeValueInput={onSearch}
        onClearFilter={onClearFilter}
        sliderData={[sliderValue?.min ?? 0, sliderValue?.max ?? currentData?.maxCardsCount ?? 0]}
        sliderTitle={'Number of cards'}
        tabLabel={'Show packs cards'}
        tabValue={tabValue}
      />
      <h2>current page: {decks?.pagination?.currentPage}</h2>
      <DecksTable
        decksData={sortedData}
        isDisabled={loading}
        onSort={onChangeSort}
        sort={sortOptions}
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

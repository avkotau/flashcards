import { useState } from 'react'

import { Pagination, PaginationProps } from '@/components'
import { pageOptions } from '@/components/pages/decks'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

const PaginationHook = (props: PaginationProps) => {
  const [pageSize, setPageSize] = useState(props.pageSize)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePageSize = (data: string) => {
    setPageSize(Number(data))
  }

  const handlePageSizeChange = (newPageSize: string) => {
    setCurrentPage(1) // Reset current page to first
    setPageSize(Number(newPageSize)) // Update page size
  }

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onPageSizeChange={handlePageSizeChange}
      onValueChange={onChangePageSize}
      options={props.options}
      pageSize={pageSize}
      totalCount={props.totalCount}
    />
  )
}

export const Default: Story = {
  args: {
    currentPage: 1,
    options: pageOptions,
    pageSize: 10,
    totalCount: 250,
  },

  render: args => <PaginationHook {...args} />,
}

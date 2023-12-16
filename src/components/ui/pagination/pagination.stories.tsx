import { useState } from 'react'

import { Pagination, PaginationProps } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>
const options = [
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
  { title: '40', value: '40' },
  { title: '50', value: '50' },
  { title: '60', value: '60' },
  { title: '70', value: '70' },
]
const PaginationHook = (props: PaginationProps) => {
  const [pageSize, setPageSize] = useState(props.pageSize)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePageSize = (data: string) => {
    setPageSize(Number(data))
  }

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
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
    options: options,
    pageSize: 10,
    totalCount: 250,
  },

  render: args => <PaginationHook {...args} />,
}

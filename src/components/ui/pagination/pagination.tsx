import { Typography } from '@/components'
import { CustomSelect, CustomSelectProps } from '@/components/ui/select'
import { SelectItemType } from '@/components/ui/select/selectItem'
import cn from 'classnames'

import s from './pagination.module.scss'

import { DOTS, usePagination } from './usePagination'

export type PaginationProps = {
  className?: string
  currentPage: number
  onPageChange: (page: number) => void
  onPageSizeChange: (newPageSize: string) => void
  options: SelectItemType[]
  pageSize: number
  siblingCount?: number
  totalCount: number
} & CustomSelectProps

export const Pagination = ({
  className,
  currentPage,
  onPageChange,
  onPageSizeChange,
  pageSize,
  siblingCount = 1,
  totalCount,
  ...rest
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange && paginationRange[paginationRange.length - 1]

  return (
    <div className={s.wrapper}>
      <ul className={cn(s.paginationContainer, className)}>
        {/* Left navigation arrow */}
        <li
          className={cn(s.paginationItem, {
            [s.disabled]: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className={cn(s.arrow, s.left)} />
        </li>
        {paginationRange?.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li key={index + 'DOTS'}>&#8230;</li>
          }

          // Render our Page Pills
          return (
            <li
              className={cn(s.paginationItem, {
                [s.selected]: pageNumber === currentPage,
              })}
              key={index}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          )
        })}
        {/*  Right Navigation arrow */}
        <li
          className={cn(s.paginationItem, {
            [s.disabled]: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className={cn(s.arrow, s.right)} />
        </li>
      </ul>
      <div className={s.paginationControl}>
        <Typography.Body2>Показать</Typography.Body2>
        <CustomSelect {...rest} onValueChange={onPageSizeChange} pageSize={pageSize} />
        <Typography.Body2>на странице</Typography.Body2>
      </div>
    </div>
  )
}

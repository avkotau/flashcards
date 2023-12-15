import { Typography } from '@/components'
import { CustomSelect } from '@/components/ui/select'
import cn from 'classnames'

import s from './pagination.module.scss'

import { DOTS, usePagination } from './usePagination'

type PaginationProps = {
  className?: string
  currentPage: number
  onPageChange: (page: number) => void
  pageSize?: number
  siblingCount?: number
  totalCount?: number
}

export const Pagination = (props: PaginationProps) => {
  const { className, currentPage, onPageChange, pageSize, siblingCount = 1, totalCount } = props

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
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className={cn(s.arrow, s.left)} />
        </li>
        {paginationRange?.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li className={s.paginationItemDots} key={index + 'DOTS'}>
                &#8230;
              </li>
            )
          }

          // Render our Page Pills
          return (
            <li
              className={cn(s.paginationItem, {
                selected: pageNumber === currentPage,
              })}
              key={index}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })}
        {/*  Right Navigation arrow */}
        <li
          className={cn(s.paginationItem, {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className={cn(s.arrow, s.right)} />
        </li>
      </ul>
      <div className={s.paginationControl}>
        <Typography.Body2>Показать</Typography.Body2>
        <CustomSelect options={[]} />
        <Typography.Body2>на странице</Typography.Body2>
      </div>
    </div>
  )
}

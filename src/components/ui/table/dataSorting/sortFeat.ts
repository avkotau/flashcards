import { DataItem } from '@/components/ui/table/dataSorting/data'
import { Sort } from '@/components/ui/table/tableHeader'

export const getSortedData = (data: DataItem[], sort: Sort) => {
  if (!sort || !sort.key) {
    return data
  }

  return [...data].sort((a, b) => {
    const key = sort.key as keyof DataItem
    const valA = a[key]
    const valB = b[key]

    if (valA < valB) {
      return sort.direction === 'asc' ? -1 : 1
    }
    if (valA > valB) {
      return sort.direction === 'asc' ? 1 : -1
    }

    return 0
  })
}

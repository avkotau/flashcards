// import { DataItem } from '@/components/ui/table/dataSorting'
import { Sort } from '@/components/ui/table/tableHeader'

export const getSortedData = (data: any, sort: Sort) => {
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

import { Sort } from '@/components'
import { GetDecksResponseItems } from '@/services/flashCards.type'

export const getSortedData = (data: GetDecksResponseItems[], sort: Sort | undefined) => {
  if (!sort || !sort.key) {
    return data
  }

  return [...data].sort((a, b) => {
    const key = sort.key as keyof GetDecksResponseItems

    let valA = a[key]
    let valB = b[key]

    if (key === 'author') {
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

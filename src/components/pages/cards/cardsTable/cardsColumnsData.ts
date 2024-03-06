import { TableHeaderProps } from '@/components'

export const cardsColumnsData: TableHeaderProps[] = [
  {
    isSorted: true,
    key: 'question',
    title: 'Question',
  },
  {
    isSorted: true,
    key: 'answer',
    title: 'Answer',
  },
  {
    isSorted: true,
    key: 'updated',
    title: 'Last Updated',
  },
  {
    isSorted: true,
    key: 'grade',
    title: 'Grade',
  },
  {
    key: 'icons',
    title: '',
  },
]

export const getCardsHeaderTableData = (isOwner: boolean) => {
  if (isOwner) {
    return cardsColumnsData
  }

  return cardsColumnsData.slice(0, cardsColumnsData.length - 1)
}

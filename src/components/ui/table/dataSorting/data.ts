import { GetDecksResponseItems } from '@/services/flashCards.type'

export type RequiredFields = Omit<
  GetDecksResponseItems,
  'created' | 'id' | 'rating' | 'shots' | 'userId'
>

export const data: RequiredFields[] = [
  {
    author: {
      id: '1',
      name: 'William Shakespeare',
    },
    cardsCount: 3,
    isPrivate: false,
    name: 'Book 1',
    updated: '10.12.2023',
  },
  {
    author: {
      id: '2',
      name: 'Charles Dickens',
    },
    cardsCount: 1,
    isPrivate: false,
    name: 'Book 2',
    updated: '04.12.2023',
  },
  {
    author: {
      id: '3',
      name: 'Jane Austen',
    },
    cardsCount: 5,
    isPrivate: false,
    name: 'Book 3',
    updated: '03.12.2023',
  },
  {
    author: {
      id: '4',
      name: 'George Orwell',
    },
    cardsCount: 4,
    isPrivate: false,
    name: 'Book 4',
    updated: '01.12.2023',
  },
]

export type CardsResponse = {
  items: Card[]
  pagination: CardsPagination
}
export type Card = {
  answer: string
  answerImg: null | string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: null | string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
type CardsPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type CardsParams = {
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

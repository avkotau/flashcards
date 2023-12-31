export type GetDecksResponse = {
  items: GetDecksResponseItems[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type GetDeckByIdArgs = {
  id: number
}

export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type GetDecksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksResponseItemsAuthor = {
  id: string
  name: string
}

export type GetDecksResponseItems = {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isBlocked?: any
  isDeleted?: boolean | null
  isPrivate: boolean | null
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export type DeleteDeckResponse = Omit<GetDecksResponseItems, 'author'>

export type DeleteDeckParams = Pick<GetDecksResponseItems, 'id'>

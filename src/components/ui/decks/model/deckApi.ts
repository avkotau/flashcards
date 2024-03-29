import { baseApi } from '@/app/base-api'
import { RootState } from '@/app/store'
import {
  DeleteDeckParams,
  DeleteDeckResponse,
  GetDeckParams,
  GetDeckResponse,
  GetDecksArgs,
  GetDecksResponse,
  GetDecksResponseItems,
  UpdateDeck,
} from '@/services/flashCards.type'

const deckService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<GetDecksResponseItems, FormData>({
        invalidatesTags: ['Deck'],
        async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
          const state = getState() as RootState

          const currentPage = state.decks.currentPage
          const name = state.decks.searchName
          const minCards = state.decks.cardsCount.min
          const maxCards = state.decks.cardsCount.max
          const pageSize = state.decks.pageSize

          const res = await queryFulfilled

          dispatch(
            deckService.util.updateQueryData(
              'getDecks',
              {
                currentPage: currentPage,
                itemsPerPage: pageSize,
                maxCardsCount: maxCards,
                minCardsCount: minCards,
                name,
              },
              draft => {
                draft.items.unshift(res.data)
              }
            )
          )
        },
        query: args => ({
          body: args,
          method: 'POST',
          params: args ?? {},
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<DeleteDeckResponse, DeleteDeckParams>({
        invalidatesTags: ['Deck'],
        async onQueryStarted(_, { dispatch }) {
          dispatch(deckService.util.updateQueryData('getDecks', {}, () => {}))
        },
        query: ({ id }) => {
          return {
            method: 'DELETE',
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDeckById: builder.query<GetDeckResponse, GetDeckParams>({
        providesTags: ['Deck', { id: 'List', type: 'Deck' }],
        query: ({ id }) => ({
          method: 'GET',
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Deck'],
        query: args => ({
          params: args ?? {},
          url: `v1/decks`,
        }),
      }),
      updateDeck: builder.mutation<GetDecksResponseItems, UpdateDeck>({
        invalidatesTags: ['Deck'],
        async onQueryStarted({ id, ...body }, { dispatch, getState, queryFulfilled }) {
          const state = getState() as RootState

          const currentPage = state.decks.currentPage
          const name = state.decks.searchName
          const minCards = state.decks.cardsCount.min
          const maxCards = state.decks.cardsCount.max
          const pageSize = state.decks.pageSize

          const updateDeckInCache = dispatch(
            deckService.util.updateQueryData(
              'getDecks',
              {
                currentPage: currentPage,
                itemsPerPage: pageSize,
                maxCardsCount: maxCards,
                minCardsCount: minCards,
                name,
              },
              draft => {
                const deck = draft.items.find(deck => deck.id === id)

                if (deck) {
                  Object.assign(deck, {
                    ...deck,
                    ...body,
                  })
                }
              }
            )
          )

          try {
            await queryFulfilled
          } catch {
            updateDeckInCache.undo()
          }
        },
        query: ({ body, id }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = deckService

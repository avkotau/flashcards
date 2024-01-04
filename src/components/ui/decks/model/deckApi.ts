import { baseApi } from '@/app/base-api'
import {
  DeleteDeckParams,
  DeleteDeckResponse,
  GetDeckByIdArgs,
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
        query: args => ({
          body: args,
          method: 'POST',
          params: args ?? {},
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<DeleteDeckResponse, DeleteDeckParams>({
        query: ({ id }) => ({
          method: 'DELETE',
          url: `decks/${id}`,
        }),
      }),
      editDeck: builder.mutation<GetDecksResponseItems, UpdateDeck>({
        query: ({ body, id }) => ({
          body,
          method: 'PATCH',
          url: `decks/${id}`,
        }),
      }),
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        query: ({ id }) => ({
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
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useEditDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
} = deckService

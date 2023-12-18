import { baseApi } from '@/app/base-api'
import {
  CreateDeckArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
} from '@/services/flashCards.type'

const deckService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Deck'],
        query: args => ({
          body: args,
          method: 'POST',
          params: args ?? {},
          url: `v1/decks`,
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

export const { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } = deckService

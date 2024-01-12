import { baseApi } from '@/app/base-api'
import { RootState } from '@/app/store'
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
      updateDeck: builder.mutation<GetDecksResponseItems, UpdateDeck>({
        invalidatesTags: ['Deck'],
        async onQueryStarted({ body, id }, { dispatch, getState, queryFulfilled }) {
          const state = getState() as RootState

          let cover = ''

          const patchResult = dispatch(
            // @ts-ignore
            deckService.util.updateQueryData('getDecks', state, draft => {
              const index = draft.items.findIndex(deck => deck.id === id)

              const name = body.get('name')
              const isPrivate = body.get('isPrivate')
              const coverBlob = body.get('cover')

              if (coverBlob instanceof Blob) {
                cover = URL.createObjectURL(coverBlob)
              }

              if (index !== -1) {
                draft.items[index] = {
                  ...draft.items[index],
                  cover: cover,
                  isPrivate: !!isPrivate,
                  name: typeof name === 'string' ? name : '',
                }
              }
            })
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          } finally {
            URL.revokeObjectURL(cover)
          }
        },
        query: ({ body, id }) => {
          return {
            body,
            method: 'PATCH',
            url: `v1/decks/${id}`,
          }
        },
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

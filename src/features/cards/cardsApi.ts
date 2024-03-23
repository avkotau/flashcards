import { baseApi } from '@/app/base-api'
import { CardsParams, CardsResponse } from '@/features'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponse, { id: string; params: CardsParams }>({
      providesTags: ['Cards'],
      query: ({ id, params }) => ({
        method: 'GET',
        params: params,
        url: `v1/decks/${id}/cards`,
      }),
    }),
    updateCard: builder.mutation<any, any>({
      query: ({ body, cardId }) => ({
        body,
        method: 'PATCH',
        url: `v1/cards/${cardId}`,
      }),
    }),
  }),
})

export const { useGetCardsQuery, useUpdateCardMutation } = cardsApi

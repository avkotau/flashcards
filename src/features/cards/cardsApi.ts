import { baseApi } from '@/app/base-api'
import { CardsParams, CardsResponse } from '@/features'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponse, { id: string; params: CardsParams }>({
      query: ({ id, params }) => ({
        method: 'GET',
        params: params,
        url: `decks/${id}/cards`,
      }),
    }),
  }),
})

export const { useGetCardsQuery } = cardsApi

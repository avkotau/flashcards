import { baseApi } from '@/app/base-api'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<any, any>({
      query: ({ id, params }) => ({
        method: 'GET',
        params: params,
        url: `decks/${id}/cards`,
      }),
    }),
  }),
})

export const { useGetCardsQuery } = cardsApi

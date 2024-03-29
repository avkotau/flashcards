import { baseApi } from '@/app/base-api'
import { Card, CardLearnResponse, CardsParams, CardsResponse, LearnCardRequest } from '@/features'
import { GetDeckResponse } from '@/services'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCardLearn: builder.query<CardLearnResponse & { name?: string }, LearnCardRequest>({
      queryFn: async (arg, _api, _extraOptions, fetchWithBQ) => {
        const deckResponse = await fetchWithBQ(`decks/${arg.id}`)

        const cardsResponse = await fetchWithBQ({
          method: 'GET',
          params: { previousCardId: arg.previousCardId },
          url: `decks/${arg.id}/learn`,
        })

        const deckData = deckResponse.data as GetDeckResponse
        const cardData = cardsResponse.data as CardLearnResponse

        return { data: { ...cardData, name: deckData.name } }
      },
    }),
    getCards: builder.query<CardsResponse, { id: string; params: CardsParams }>({
      providesTags: ['Cards'],
      query: ({ id, params }) => ({
        method: 'GET',
        params: params,
        url: `v1/decks/${id}/cards`,
      }),
    }),

    updateCard: builder.mutation<Card, { body: FormData; cardId: string }>({
      query: ({ body, cardId }) => ({
        body,
        method: 'PATCH',
        url: `v1/cards/${cardId}`,
      }),
    }),
  }),
})

export const { useGetCardLearnQuery, useGetCardsQuery, useUpdateCardMutation } = cardsApi

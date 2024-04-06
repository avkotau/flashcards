import { baseApi } from '@/app/base-api'
import { Card, CardLearnResponse, CardsParams, CardsResponse, LearnCardRequest } from '@/features'
import { GetDeckResponse, RecoverPasswordParams } from '@/services'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<Card, { body: FormData; id: string }>({
      invalidatesTags: ['Cards', 'Deck'],
      query: ({ body, id }) => ({
        body,
        method: 'POST',
        url: `v1/decks/${id}/cards`,
      }),
    }),
    getCards: builder.query<CardsResponse, { id: string; params: CardsParams }>({
      providesTags: ['Cards'],
      query: ({ id, params }) => ({
        method: 'GET',
        params: params,
        url: `v1/decks/${id}/cards`,
      }),
    }),
    getRandomCard: builder.query<CardLearnResponse & { name?: string }, LearnCardRequest>({
      queryFn: async (arg, _api, _extraOptions, fetchWithBQ) => {
        const deckResponse = await fetchWithBQ(`v1/decks/${arg.id}`)

        const cardsResponse = await fetchWithBQ({
          method: 'GET',
          params: { previousCardId: arg.previousCardId },
          url: `v1/decks/${arg.id}/learn`,
        })

        const deckData = deckResponse.data as GetDeckResponse
        const cardData = cardsResponse.data as CardLearnResponse

        return { data: { ...cardData, name: deckData.name } }
      },
    }),

    rateCard: builder.mutation<any, any>({
      invalidatesTags: ['Cards'],
      query: (deskId, ...rest) => ({
        body: rest,
        method: 'POST',
        url: `v1/decks/${deskId}/learn`,
      }),
    }),
    recoverPassword: builder.mutation<void, RecoverPasswordParams>({
      query: arg => ({
        body: {
          email: arg.email,
          html: '<h1>Hi, ##name##</h1><p>Click <a href="https://quizcreatorscards.vercel.app/##token##">here</a> to recover your password</p>',
          subject: 'Recover password',
        },
        method: 'POST',
        url: 'v1/auth/recover-password',
      }),
    }),
    updateCard: builder.mutation<Card, { body: FormData; cardId: string; deckId: string }>({
      query: ({ body, cardId }) => ({
        body,
        method: 'PATCH',
        url: `v1/cards/${cardId}`,
      }),
    }),
  }),
})

export const {
  useCreateCardMutation,
  useGetCardsQuery,
  useGetRandomCardQuery,
  useRateCardMutation,
  useRecoverPasswordMutation,
  useUpdateCardMutation,
} = cardsApi

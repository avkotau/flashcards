import { baseApi } from '@/app/base-api'
import { BaseResponseType } from '@/services/authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<BaseResponseType | null, void>({
      providesTags: ['Me'],
      query: () => 'auth/me',
    }),
  }),
})

export const { useMeQuery } = authApi

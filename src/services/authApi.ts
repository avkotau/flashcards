import { baseApi } from '@/app/base-api'
import { LoginArgs, UserArgs } from '@/services/authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `v1/auth/login`,
      }),
    }),
    me: builder.query<UserArgs, void>({
      providesTags: ['Me'],
      query: () => 'auth/me',
    }),
  }),
})

export const { useLoginMutation, useMeQuery } = authApi

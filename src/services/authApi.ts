import { baseApi } from '@/app/base-api'
import { LoginArgs, SignUpParams, UserArgs } from '@/services/authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: `v1/auth/login`,
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'POST',
        url: `v1/auth/logout`,
      }),
    }),
    me: builder.query<UserArgs, void>({
      providesTags: ['Me'],
      query: () => 'v1/auth/me',
    }),
    signUp: builder.mutation<UserArgs, SignUpParams>({
      invalidatesTags: ['Me'],
      query: params => ({
        body: params,
        method: 'POST',
        url: 'v1/auth/sign-up',
      }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useMeQuery, useSignUpMutation } = authApi

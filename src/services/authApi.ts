import { baseApi } from '@/app/base-api'
import { BaseResponse, LoginArgs, SignUpParams } from '@/services/authApi.types'

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
    me: builder.query<BaseResponse, void>({
      providesTags: ['Me'],
      query: () => 'v1/auth/me',
    }),
    signUp: builder.mutation<BaseResponse, SignUpParams>({
      invalidatesTags: ['Me'],
      query: params => ({
        body: params,
        method: 'POST',
        url: 'v1/auth/sign-up',
      }),
    }),
    updateProfile: builder.mutation<BaseResponse, FormData>({
      query: body => ({
        body,
        method: 'PATCH',
        url: 'v1/auth/me',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authApi

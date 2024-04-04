import { baseQueryWithReauth } from '@/app/baseQueryWithReauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),

  reducerPath: 'baseApi',
  // refetchOnFocus: true,
  tagTypes: ['Me', 'Deck', 'Cards'],
})

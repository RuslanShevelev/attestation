import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  tagTypes: ['Users'],

  endpoints: (build) => ({
    getAllUsers: build.query({
      query: (params) =>
        `/search/users?${params}`,
    }),
    getUserInfo: build.query({
      query: (url) => `/users/${url}`,
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useGetUserInfoQuery,
} = usersApi

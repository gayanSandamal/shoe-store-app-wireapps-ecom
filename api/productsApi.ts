import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.EXPO_PUBLIC_API_URL}` }),
  endpoints: (builder) => ({
    fetchAllProducts: builder.query({
      query: () => `products.json`,
      transformResponse: (response: {[key: string]: any}) => response?.data || [],
    }),
  }),
})

export const { useFetchAllProductsQuery } = productsApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/' }),
  endpoints: (builder) => ({
    fetchAllProducts: builder.query({
      query: () => `products.json`,
      transformResponse: (response: any) => response?.data || [], // Extracts the 'data' property from the response
    }),
  }),
})

export const { useFetchAllProductsQuery } = productsApi
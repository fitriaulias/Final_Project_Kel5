// import { createApi } from '@reduxjs/toolkit/query/react'

// export const searchApi = createApi({
//     reducerPath: 'searchApi',
//     baseQuery: 'https://newsapi.org/v2/everything?',
//     endpoints: (builder) => ({
//         getSearch: builder.query({
//             query: () => ({
//                 url: `q=${query}&apiKey=84de37a1a2054cc18bafae4caa2694fe`,
//                 method: "GET"
//             })
//         })
//     })
// })

// export const searchAPISelector = (state) => state.searchApi

// export const { useGetSearchQuery } = searchApi
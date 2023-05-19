import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders = {
    
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '54efe5ae7fmshab28b2f9f0c2bb9p192821jsn35796c215a1f',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery} = cryptoNewsApi;
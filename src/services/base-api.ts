import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {BASE_URL} from "../shared/constans/apiUrls.ts";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: ()=>({}),
})

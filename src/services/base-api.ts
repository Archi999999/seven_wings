import {BaseQueryApi, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {toast} from "react-toastify";

import {BASE_URL} from "../shared/constans/apiUrls.ts";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithInterceptor,
    endpoints: ()=>({}),
})

async function baseQueryWithInterceptor  (args: string | FetchArgs, api: BaseQueryApi, extraOptions: Record<string, unknown>) {
    const result = await fetchBaseQuery({ baseUrl: BASE_URL })(args, api, extraOptions);

    if (result.error) {
        const error = result.error as { error: string, status: string }
        toast.error(error.error)
    }

    return result;
}
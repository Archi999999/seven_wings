import { API_URLS } from "../../shared/constans/apiUrls.ts";
import { baseApi } from "../base-api.ts";

import { IWorkDetail } from "./types.ts";

export const projectsService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWorkDetailsById: builder.query<IWorkDetail[],  number>({
            // providesTags: ['projectList'],
            query: (projectId) => ({
                url: API_URLS.PROJECT.GET_ALL_TASKS_BY_ID(projectId)
            })
        }),
        // createTaskInProject: builder.query<Project,  number>({})
    })
})

export const { useLazyGetWorkDetailsByIdQuery } = projectsService
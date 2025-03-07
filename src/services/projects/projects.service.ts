import {API_URLS} from "../../shared/constans/apiUrls.ts";
import {baseApi} from "../base-api.ts";

import {ICreateWorkDetail, IDeleteWorkDetail, IResUpdateWorkDetail, IUpdateWorkDetail, IWorkDetail} from "./types.ts";

export const projectsService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWorkDetailsById: builder.query<IWorkDetail[],  number>({
            query: (projectId) => ({
                url: API_URLS.PROJECT.GET_ALL_WORK_DETAILS_BY_ID(projectId)
            })
        }),
        updateWorkDetail: builder.mutation<IResUpdateWorkDetail,  IUpdateWorkDetail>({
            query: ({workDetail, projectId}) => ({
                body: workDetail,
                method: 'POST',
                url: API_URLS.PROJECT.UPDATE_WORK_DETAIL({rID: workDetail.id, eID: projectId}),
            })
        }),
        createWorkDetail: builder.mutation<IResUpdateWorkDetail,  ICreateWorkDetail>({
            query: ({projectId, workDetail}) => ({
                body: workDetail,
                method: "POST",
                url: API_URLS.PROJECT.CREATE_WORK_DETAIL(projectId)
            })
        }),
        deleteWorkDetail: builder.mutation<void,  IDeleteWorkDetail>({
            query: ({projectId, workDetailId}) => ({
                method: "DELETE",
                url: API_URLS.PROJECT.DELETE_WORK_DETAIL({eID: projectId, rID: workDetailId})
            })
        })
    })
})

export const { useLazyGetWorkDetailsByIdQuery, useUpdateWorkDetailMutation, useCreateWorkDetailMutation, useDeleteWorkDetailMutation } = projectsService
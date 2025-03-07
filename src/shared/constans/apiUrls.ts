export const BASE_URL = 'http://185.244.172.108:8081';

export const API_URLS = {
    PROJECT: {
        CREATE_PROJECT: `/v1/outlay-rows/entity/create`,
        GET_ALL_WORK_DETAILS_BY_ID: (eID: number) => `/v1/outlay-rows/entity/${eID}/row/list`,
        CREATE_WORK_DETAIL: (eID: number) => `/v1/outlay-rows/entity/${eID}/row/create`,
        UPDATE_WORK_DETAIL: ({eID, rID}: {eID: number, rID: number}) => `/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
        DELETE_WORK_DETAIL: ({eID, rID}: {eID: number, rID: number}) => `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
    },
}
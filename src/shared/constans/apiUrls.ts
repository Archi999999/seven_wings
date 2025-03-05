export const BASE_URL = 'http://185.244.172.108:8081';

export const API_URLS = {
    PROJECT: {
        CREATE_PROJECT: `/v1/outlay-rows/entity/create`,
        GET_ALL_TASKS_BY_ID: (eID: number) => `/v1/outlay-rows/entity/${eID}/row/list`,
        CREATE_TASK: (eID: number) => `/v1/outlay-rows/entity/${eID}/row/create`,
        UPDATE_TASK: ({eID, rID}: {eID: number, rID: number}) => `/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
        DELETE_TASK: ({eID, rID}: {eID: number, rID: number}) => `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
    },
}
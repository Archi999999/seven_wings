import {createSlice} from "@reduxjs/toolkit";

import {projectsService} from "../../../services/projects/projects.service.ts";
import {IWorkDetail} from "../../../services/projects/types.ts";

type InitialState = IWorkDetail[]

const initialState: InitialState = []

const projectsSlice = createSlice({
    initialState,
    name: "projects",
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            projectsService.endpoints.updateWorkDetail.matchFulfilled,
            (state, { payload }) => {
                const updateWorkDetails = (workDetails: IWorkDetail[]) => {
                    workDetails.forEach((wD) => {
                        if (wD.id === payload.current.id) {
                            Object.assign(wD, payload.current);
                        } else if (wD.child && wD.child.length > 0) {
                            updateWorkDetails(wD.child);
                        }
                    });
                };

                updateWorkDetails(state);
            }
        ).addMatcher(
            projectsService.endpoints.getWorkDetailsById.matchFulfilled,
            (_, { payload }) => {
                return payload;
            }
        ).addMatcher(
            projectsService.endpoints.createWorkDetail.matchFulfilled,
            (state, { payload, meta})=> {
                const parentId = meta.arg.originalArgs.workDetail.parentId;

                if (!parentId) {
                    return [payload.current]
                }

                const addWorkDetail = (workDetails: IWorkDetail[]) => {
                    workDetails.forEach((wD) => {
                        if (wD.id === parentId) {
                            wD.child = [...wD.child, payload.current]
                        } else if (wD.child && wD.child.length > 0) {
                            addWorkDetail(wD.child)
                        }
                    })
                }
                addWorkDetail(state)
            }
        ).addMatcher(
            projectsService.endpoints.deleteWorkDetail.matchFulfilled,
            (state, {meta}) => {
                const deleteWorkDetail = (workDetails: IWorkDetail[]) => {
                    for (let i = 0; i < workDetails.length; i++) {
                        const wD = workDetails[i]
                        if (wD.id === meta.arg.originalArgs.workDetailId ) {
                            workDetails.splice(i, 1)
                            return
                        } else if (wD.child.length > 0) {
                            deleteWorkDetail(wD.child)
                        }
                    }
                }
                deleteWorkDetail(state)
            }
        )
    }})

export const projectSlice = projectsSlice.reducer
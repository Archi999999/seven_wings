import {configureStore} from "@reduxjs/toolkit";

import {projectSlice} from "../../features/projects/model/slice.ts";
import {baseApi} from "../../services/base-api.ts";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        projectSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
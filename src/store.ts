import {configureStore} from '@reduxjs/toolkit'
import authenReducer from "./Reducers/reducer";

export const store = configureStore({
    reducer: authenReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../reducer/BookReducer";
import SearchReducer from "../reducer/SearchReducer";

const store = configureStore({
  reducer: {
    book: BookReducer,
    searches: SearchReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

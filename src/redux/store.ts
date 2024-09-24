import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fearutes/auth/authSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./fearutes/baseApi";

const persistConfig = {
  key: "auth",
  storage,
};
const parsistAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: parsistAuthReducer,
  },
  middleware: (getDefultMiddleware) =>
    getDefultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const parsistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./slices/contactsSlice";
import { filterSlice } from "./slices/filterSlice";
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
import { AuthorizationInterface } from "components/App/App.types";
import { AuthorizeReducer } from "./authorize/slice";

const authorizePersistConfig = {
  key: "authorize",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    authorize: persistReducer<AuthorizationInterface>(
      authorizePersistConfig,
      AuthorizeReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

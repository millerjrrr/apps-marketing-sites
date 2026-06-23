import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rangeReducer from "./rangeSlice";
import gridDataReducer from "./gridDataSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  range: rangeReducer,
  gridData: gridDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

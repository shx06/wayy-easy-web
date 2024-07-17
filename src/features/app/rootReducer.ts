import themeReducer from "@/features/theme/themeSlice";
import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import apiBase from "./apiBase";

// ----------------------------------------------------------------------

export const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

export const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export const rootPersistConfig = {
  key: "webserv",
  storage,
  keyPrefix: "catch-",
  whitelist: ["theme"],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  [apiBase.reducerPath]: apiBase.reducer,
});

export default rootReducer;

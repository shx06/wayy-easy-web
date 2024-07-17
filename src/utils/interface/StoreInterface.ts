import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Persistor } from "redux-persist";

export interface StoreInterface extends ToolkitStore {
  __persistor?: Persistor | string | null | undefined;
}
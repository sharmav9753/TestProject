import { configureStore } from "@reduxjs/toolkit";
import createRootReducer from "./Reducers";

const rootReducer = createRootReducer();

const store = configureStore({
  reducer: rootReducer,
});

export { store };

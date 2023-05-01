import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import popularSlice from "../redux/popular/popular.slice";
import battleSlice from "./battle/buttle.slice";

const store = configureStore({
  reducer: {
    popular: popularSlice,
    battle: battleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createLogger({
        collapsed: true,
      })
    ),
});

export default store;

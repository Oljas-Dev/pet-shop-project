import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./slices/pageLoader";

const store = configureStore({
  reducer: {
    pageLoader: pageReducer,
  },
});

export default store;

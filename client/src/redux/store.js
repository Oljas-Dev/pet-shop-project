import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./slices/pageLoader";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    pageLoader: pageReducer,
    counter: counterReducer,
    cart: cartReducer,
  },
});

export default store;

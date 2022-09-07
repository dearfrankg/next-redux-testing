import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counter-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

const store = makeStore();

export default store;

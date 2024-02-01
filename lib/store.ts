"use client";
import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./features/navSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      nav: navSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

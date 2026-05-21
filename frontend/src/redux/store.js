import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import msgReducer from "./msgSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    msg: msgReducer,
  },
});

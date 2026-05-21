import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import msgReducer from "./msgSlice";
import sellerAuthReducer from "./sellerAuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    msg: msgReducer,
    sellerAuth: sellerAuthReducer,
  },
});

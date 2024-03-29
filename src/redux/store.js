import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import shopReducer from "./features/slices/shopSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shop: shopReducer,
  },
});

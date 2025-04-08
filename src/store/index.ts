import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slices/authSlices";
import instituteReducer from "@/store/slices/institutionSlice"
import statusReducer from "@/store/slices/statusSlice"


export const store = configureStore({
  reducer: {
    auth: authReducer,
    institute:instituteReducer,
    status:statusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

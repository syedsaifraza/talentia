import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slices/authSlices";
import instituteReducer from "@/store/slices/institutionSlice"
import statusReducer from "@/store/slices/statusSlice"
import reelsReducer from "@/store/slices/reelsSlice"


export const store = configureStore({
  reducer: {
    auth: authReducer,
    institute:instituteReducer,
    status:statusReducer,
    reels:reelsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: [],
  loading:false
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
     
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export actions
export const { setStatus,setLoading } = statusSlice.actions;

// Correctly export the reducer
export default statusSlice.reducer;

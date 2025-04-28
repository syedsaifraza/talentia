import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reels: [],
  loading:false
};

const reelsSlice = createSlice({
  name: "reels",
  initialState,
  reducers: {
    setReels: (state, action) => {
      state.reels = action.payload;
    },
     
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export actions
export const { setReels,setLoading } = reelsSlice.actions;

// Correctly export the reducer
export default reelsSlice.reducer;

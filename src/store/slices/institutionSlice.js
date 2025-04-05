import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  institutes: [],
  loading:false
};

const instituteSlice = createSlice({
  name: "institute",
  initialState,
  reducers: {
    setInstitue: (state, action) => {
      state.institutes = action.payload;
    },
     
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export actions
export const { setInstitue,setLoading } = instituteSlice.actions;

// Correctly export the reducer
export default instituteSlice.reducer;

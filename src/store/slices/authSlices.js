import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userInfo:null,
  token: null,
  isAuthenticated: false,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    setUserInfo:(state,action)=>{
       state.userInfo=action.payload
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export actions
export const { setLoggedInUser, logout, setLoading,setUserInfo } = authSlice.actions;

// Correctly export the reducer
export default authSlice.reducer;

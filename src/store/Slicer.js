import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    user: null
};

const authSlicer = createSlice({
  name: "Auth-Slicer",
  initialState,
  reducers: {
      Login(state, actions) {
          state.user = actions.payload
      }
  },
});

export const store = configureStore({
  reducer: { AuthSlicer: authSlicer.reducer },
});

export const authSlicerActions = authSlicer.actions;

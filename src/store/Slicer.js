import { createSlice, configureStore } from "@reduxjs/toolkit";
import uiSlicer from "./ui-slicer";
import postSlicer from "./post-slicer";

const initialState = {
  user: null,
  loading: true
};

const authSlicer = createSlice({
  name: "Auth-Slicer",
  initialState,
  reducers: {
    Login(state, actions) {
      // console.log("Login Function is Running")
      state.user = actions.payload;
      state.loading = false
    },
    Logout(state) {
      state.user = null;
    },
  },
});

export const store = configureStore({
  reducer: { AuthSlicer: authSlicer.reducer, UiSlicer: uiSlicer.reducer, PostSlicer: postSlicer.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const authSlicerActions = authSlicer.actions;

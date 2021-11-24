import { createSlice, configureStore } from "@reduxjs/toolkit";
import uiSlicer from "./ui-slicer";

const initialState = {
  user: null,
};

const authSlicer = createSlice({
  name: "Auth-Slicer",
  initialState,
  reducers: {
    Login(state, actions) {
      state.user = actions.payload;
    },
    Logout(state) {
      state.user = null;
    },
  },
});

export const store = configureStore({
  reducer: { AuthSlicer: authSlicer.reducer, UiSlicer: uiSlicer.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const authSlicerActions = authSlicer.actions;

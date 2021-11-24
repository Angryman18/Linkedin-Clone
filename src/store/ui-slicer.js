import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postmodal: false,
};

const uiSlicer = createSlice({
  name: "UI Slicer",
  initialState,
  reducers: {
    OpenPostModal(state) {
      state.postmodal = true;
    },
    ClosePostModal(state) {
      state.postmodal = false;
    },
  },
});
export const uiSlicerActions = uiSlicer.actions;
export default uiSlicer;

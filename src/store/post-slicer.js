import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    file: false,
    uploaded: 0,
    post: []
};

const postSlicer = createSlice({
  name: "Post Slicer",
  initialState,
  reducers: {
      setLoading(state, actions) {
        state.loading = actions.payload.loading;
        state.file = actions.payload.file
      },
      UploadPercent(state,actions) {
          state.uploaded = actions.payload
      },
      getPosts(state, actions) {
        state.post = actions.payload
      }
  }
});

export const postActions = postSlicer.actions;

export default postSlicer;

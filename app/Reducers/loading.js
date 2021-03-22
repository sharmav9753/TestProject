import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    updateLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

const { actions, reducer: loadingReducer } = loadingSlice;

const { updateLoading } = actions;

export { loadingReducer, updateLoading };

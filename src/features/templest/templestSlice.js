import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  templestList: [],
  loading: false,
  errorMessage: null,
};

const templestSlice = createSlice({
  name: "templest",
  initialState,
  reducers: {
    loadTemplests(state) {
      state.loading = true;
      state.errorMessage = null;
    },
    loadTemplestsError(state, action) {
      state.loading = false;
      state.errorMessage = action.payload.message;
    },
    loadTemplestsSuccess(state, action) {
      const p = action.payload.data;
      for (let i = 0; i < p.length; i++) {
        const templestList = p[i];
        state.templestList.push(templestList);
      }
      // state.templestList.push(p)
      state.loading = false;
      state.errorMessage = null;
    },
  },
});

export const { loadTemplestsSuccess, loadTemplests, loadTemplestsError } =
  templestSlice.actions;
export const selectorTemplests = (state) => state.templest.templestsList;

export default templestSlice.reducer;

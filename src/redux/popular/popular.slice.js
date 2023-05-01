import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularRepos } from "./popular.requests";

const initialState = {
  selectedLanguage: "All",
  loading: false,
  repos: [],
  error: null,
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setSelectedLanguage: (state, { payload }) => {
      state.selectedLanguage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularRepos.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPopularRepos.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.repos = payload;
    });

    builder.addCase(fetchPopularRepos.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setSelectedLanguage } = popularSlice.actions;

export default popularSlice.reducer;

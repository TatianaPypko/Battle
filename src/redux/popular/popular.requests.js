import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularRepos = createAsyncThunk(
  "popular/fetchPopularRepos",
  async (language, { rejectWithValue }) => {
    try {
      const encodeURI = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
      );
      const response = await axios.get(encodeURI);
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

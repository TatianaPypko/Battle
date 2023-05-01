import { createSlice } from "@reduxjs/toolkit";
import { getProfile, battle } from "./battle.requests.js";

const initialState = {
  playerOneName: "",
  playerTwoName: "",
  playerOneImage: null,
  playerTwoImage: null,
  loading: false,
  results: {
    winner: {},
    loser: {},
    resultError: null,
  },
};

const battleSlice = createSlice({
  name: "battle",
  initialState,
  reducers: {
    setPlayerDataAction: (state, { payload }) => {
      state[payload[0]] = "";
      state[payload[1]] = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProfile.fulfilled, (state, { meta, payload }) => {
      const { playerOneName, playerOneImage } = meta.arg || {};
      const { login, avatar_url } = payload;
      if (playerOneName && playerOneImage) {
        state.playerOneName = login;
        state.playerOneImage = avatar_url;
      } else {
        state.playerTwoName = login;
        state.playerTwoImage = avatar_url;
      }
      state.loading = false;
    });

    builder.addCase(getProfile.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(battle.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(battle.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.results = {
        winner: payload[0],
        loser: payload[1],
        resultError: null,
      };
    });

    builder.addCase(battle.rejected, (state, { payload }) => {
      state.loading = false;
      state.results = {
        resultError: payload,
      };
    });
  },
});

export const { setPlayerDataAction } = battleSlice.actions;

export default battleSlice.reducer;

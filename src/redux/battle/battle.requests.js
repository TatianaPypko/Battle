import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const handleError = (error) => console.error(error);

const getRepos = (userName) => {
  return axios
    .get(`https://api.github.com/users/${userName}/repos?per_page=100`)
    .then((repos) => repos.data)
    .catch(handleError);
};

const getStarCount = (repos) => {
  return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);

  return followers + totalStars;
};

export const getProfile = createAsyncThunk(
  "buttle/getProfile",
  async (data, { rejectWithValue }) => {
    try {
      const encodeURI = window.encodeURI(
        `https://api.github.com/users/${data.userName || data}`
      );
      const response = await axios.get(encodeURI);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getProfile2 = async (player) => {
  try {
    const encodeURI = window.encodeURI(
      `https://api.github.com/users/${player}`
    );
    const response = await axios.get(encodeURI);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

const getUserData = async (player) => {
  return await Promise.all([getProfile2(player), getRepos(player)])
    .then(([profile, repos]) => {
      return {
        profile: profile,
        score: calculateScore(profile, repos),
      };
    })
    .catch(handleError);
};

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

export const battle = createAsyncThunk(
  "buttle/battle",
  async (players, { rejectWithValue }) => {
    try {
      return Promise.all(players.map(getUserData)).then(sortPlayers);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

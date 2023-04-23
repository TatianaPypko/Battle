import {
  setPlayerDataAction,
  getButtleLoadingAction,
  getPlayerSuccessAction,
  getPlayerFailureAction,
  setSuccessResults,
  setErrorResults,
} from "./buttle.actions";

import { getProfile, battle } from "../../api";

export const getPlayersData = (data) => (dispatch) => {
  getProfile(data.userName)
    .then((player) => dispatch(getPlayerSuccessAction({ player, data })))
    .catch((error) => dispatch(getPlayerFailureAction(error, data)));
};

export const resetPlayersData = (data) => (dispatch) => {
  dispatch(setPlayerDataAction(data));
};

export const getResult = (data) => (dispatch) => {
  dispatch(getButtleLoadingAction());

  battle(data)
    .then((results) => dispatch(setSuccessResults(results)))
    .catch((error) => dispatch(setErrorResults(error)));
};

import {
  PLAYER_DATA,
  GET_RESULT_lOADING,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE,
  SET_RESULT_SUCCESS,
  SET_RESULT_ERROR,
} from "./battle.constans";

export const setPlayerDataAction = (payload) => ({
  type: PLAYER_DATA,
  payload,
});

export const getButtleLoadingAction = (payload) => ({
  type: GET_RESULT_lOADING,
  payload,
});

export const getPlayerSuccessAction = (payload) => ({
  type: GET_PLAYER_SUCCESS,
  payload,
});

export const getPlayerFailureAction = (payload) => ({
  type: GET_PLAYER_FAILURE,
  payload,
});

export const setSuccessResults = (payload) => ({
  type: SET_RESULT_SUCCESS,
  payload,
});

export const setErrorResults = (payload) => ({
  type: SET_RESULT_ERROR,
  payload,
});

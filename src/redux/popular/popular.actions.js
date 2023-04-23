import {
  SELECTED_LANGUAGE,
  GET_REPOS_SUCCESS,
  GET_REPOS_lOADING,
  GET_REPOS_FAILURE,
} from "./popular.constans";

export const setSelectedLanguageAction = (payload) => ({
  type: SELECTED_LANGUAGE,
  payload,
});

export const getReposLoadingAction = (payload) => ({
  type: GET_REPOS_lOADING,
  payload,
});

export const getReposSuccessAction = (payload) => ({
  type: GET_REPOS_SUCCESS,
  payload,
});

export const getReposFailureAction = (payload) => ({
  type: GET_REPOS_FAILURE,
  payload,
});

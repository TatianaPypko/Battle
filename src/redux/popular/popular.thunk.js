import {
  getReposLoadingAction,
  getReposSuccessAction,
  getReposFailureAction,
  setSelectedLanguageAction,
} from "./popular.actions";

import { fetchPopularRepos } from "../../api";

export const getRepos = (selectedLanguage) => (dispatch) => {
  dispatch(setSelectedLanguageAction(selectedLanguage));
  dispatch(getReposLoadingAction());

  fetchPopularRepos(selectedLanguage)
    .then((repos) => dispatch(getReposSuccessAction(repos)))
    .catch((error) => dispatch(getReposFailureAction(error)));
};

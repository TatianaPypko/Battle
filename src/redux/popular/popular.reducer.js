import {
  SELECTED_LANGUAGE,
  GET_REPOS_FAILURE,
  GET_REPOS_lOADING,
  GET_REPOS_SUCCESS,
} from "./popular.constans";

const initialState = {
  selectedLanguage: "All",
  loading: false,
  repos: [],
  error: null,
};

export const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_lOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case GET_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    default:
      return state;
  }
};

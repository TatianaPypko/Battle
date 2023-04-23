import {
  PLAYER_DATA,
  GET_RESULT_lOADING,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE,
  SET_RESULT_SUCCESS,
  SET_RESULT_ERROR,
} from "./buttle.constans";

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

export const battleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLAYER_SUCCESS:
      const { data, player } = payload;
      const keys = Object.keys(data);
      return {
        ...state,
        [keys[0]]: player.login,
        [keys[1]]: player.avatar_url,
      };
    case GET_PLAYER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case PLAYER_DATA:
      return {
        ...state,
        ...payload,
      };
    case GET_RESULT_lOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        results: {
          winner: payload[0],
          loser: payload[1],
          resultError: null,
        },
      };
    case SET_RESULT_ERROR:
      return {
        ...state,
        loading: false,
        results: {
          winner: {},
          loser: {},
          resultError: payload,
        },
      };
    default:
      return state;
  }
};

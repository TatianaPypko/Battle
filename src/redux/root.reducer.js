import { combineReducers } from "redux";
import { popularReducer } from "./popular/popular.reducer";
import { battleReducer } from "./buttle/buttle.reducer";

export default combineReducers({
  popularReducer,
  battleReducer,
});

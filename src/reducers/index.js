
import { combineReducers } from "redux";
import posts from "./posts"
// now import the reducer to the index js of the reducer
export default combineReducers ({ posts:posts });
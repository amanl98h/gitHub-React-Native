import { combineReducers } from "redux";
import userFollowerReducer from "./userFollowerReducers";
import userFollowingReducer from "./userFollowingReducers";
import userReducer from "./userReducer";
import userReposReducer from "./userReposReducers";

export const rootReducer = combineReducers({
    user: userReducer,
    follower: userFollowerReducer,
    following: userFollowingReducer,
    repos: userReposReducer,
})
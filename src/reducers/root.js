import { combineReducers } from "redux";
import { squad } from "./squad";
import { formation } from "./formation";

export default combineReducers({ squad, formation });

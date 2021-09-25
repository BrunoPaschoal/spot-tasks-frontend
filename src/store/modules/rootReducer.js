import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import updateTaskReducer from "./tasks/reducer";

export default combineReducers({
    authReducer,
    updateTaskReducer
})
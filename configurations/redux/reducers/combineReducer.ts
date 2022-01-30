import { combineReducers } from "redux";
import error from "./errorText";
import isUserAutheticated from "./userAuthentication";


export default combineReducers({
    error,
    isUserAutheticated
});

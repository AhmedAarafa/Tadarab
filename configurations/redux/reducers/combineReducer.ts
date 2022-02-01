import { combineReducers } from "redux";
import error from "./errorText";
import isUserAuthenticated from "./userAuthentication";


export default combineReducers({
    error,
    isUserAuthenticated
});

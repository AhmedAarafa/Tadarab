import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
// import reducer from "./reducers/combineReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from "redux";
import error from "./reducers/errorText";
import userAuthentication from "./reducers/userAuthentication";
import homePageData from "./reducers/homePageData";
import trainerProfileData from "./reducers/trainerProfileData";
import courseDetailsData from "./reducers/courseDetailsData";
import cartItems from "./reducers/cartItems";

// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const CombineReducers = combineReducers({
    error,
    userAuthentication,
    homePageData,
    cartItems,
    courseDetailsData,
    trainerProfileData
});
const store = createStore(CombineReducers, composeWithDevTools(applyMiddleware(thunk)));






export {store,CombineReducers};

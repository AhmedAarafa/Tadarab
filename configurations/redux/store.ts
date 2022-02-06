import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
// import reducer from "./reducers/combineReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from "redux";
import error from "./reducers/errorText";
import userAuthetication from "./reducers/userAuthentication";
import homePageData from "./reducers/homePageData";

// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const CombineReducers = combineReducers({
    error,
    userAuthetication,
    homePageData
});
const store = createStore(CombineReducers, composeWithDevTools(applyMiddleware(thunk)));






export {store,CombineReducers};

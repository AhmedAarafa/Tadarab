/* eslint-disable import/no-anonymous-default-export */


import * as TYPES from "../actionTypes/homePageData";



export default (state = {},
    action:any
) => {
    switch (action.type) { 
        case TYPES.HOME_PAGE_DATA:
            return {
                ...state,
               data:action.payload,
            };
        default:
            return state;
    }
};

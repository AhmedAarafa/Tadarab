/* eslint-disable import/no-anonymous-default-export */


import * as TYPES from "../actionTypes/errorText";



export default (state = {},
    action:any
) => {
    switch (action.type) { 
        case TYPES.ERROR_TEXT:
            return {
                ...state,
               err:action.payload,
            };
        default:
            return state;
    }
};

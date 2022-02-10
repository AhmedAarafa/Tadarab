/* eslint-disable import/no-anonymous-default-export */


import * as TYPES from "../actionTypes/courseDetailsData";



export default (state = [],
    action:any
) => {
    switch (action.type) { 
        case TYPES.COURSE_DETAILS_DATA:
            return {
                ...state,
               data:action.payload,
            };
        default:
            return state;
    }
};

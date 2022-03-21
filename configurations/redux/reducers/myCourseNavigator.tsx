/* eslint-disable import/no-anonymous-default-export */

import * as TYPES from "../actionTypes/myCourseNavigator";

export default (state = "curriculum",
    action:any
) => {
    switch (action.type) { 
        case TYPES.MY_COURSE_NAVIGATOR:
            return action.payload;
        default:
            return state;
    }
};

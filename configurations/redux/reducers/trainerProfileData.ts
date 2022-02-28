/* eslint-disable import/no-anonymous-default-export */


import * as TYPES from "../actionTypes/trainerProfileData";



export default (state = {},
    action:any
) => {
    switch (action.type) { 
        case TYPES.TRAINER_PROFILE_DATA:
            return {
                ...state,
               data:action.payload,
            };
        default:
            return state;
    }
};

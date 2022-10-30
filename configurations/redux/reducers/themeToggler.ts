/* eslint-disable import/no-anonymous-default-export */

import * as TYPES from "../actionTypes/themeToggler";

export default (state = "light",
    action:any
) => {
    switch (action.type) { 
        case TYPES.THEME_TOGGLER:
            return {
               theme:action.payload
            };
        default:
            return state;
    }
};

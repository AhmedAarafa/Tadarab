/* eslint-disable import/no-anonymous-default-export */

import * as TYPES from "../actionTypes/checkoutType";

export default (state = "cart",
    action:any
) => {
    switch (action.type) { 
        case TYPES.CHECKOUT_TYPE:
            return action.payload;
        default:
            return state;
    }
};

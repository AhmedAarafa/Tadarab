/* eslint-disable import/no-anonymous-default-export */

import * as TYPES from "../actionTypes/paymentStep";

export default (state = false,
    action:any
) => {
    switch (action.type) { 
        case TYPES.PAYMENT_STEP:
            return action.payload;
        default:
            return state;
    }
};

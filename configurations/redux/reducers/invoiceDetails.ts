/* eslint-disable import/no-anonymous-default-export */

import * as TYPES from "../actionTypes/invoiceDetails";

export default (state = {},
    action:any
) => {
    switch (action.type) { 
        case TYPES.INVOICE_DETAILS:
            return {
                ...state,
               data:action.payload,
            };
        default:
            return state;
    }
};

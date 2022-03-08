/* eslint-disable import/no-anonymous-default-export */


import * as TYPES from "../actionTypes/transactionStatus";



export default (state = {},
    action:any
) => {
    switch (action.type) { 
        case TYPES.TRANSACTION_STATUS:
            return {
                ...state,
               data:action.payload,
            };
        default:
            return state;
    }
};

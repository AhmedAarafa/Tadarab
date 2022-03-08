

import * as TYPES from '../actionTypes/transactionStatus';

export const setTransactionStatus = (payload:boolean) => ({
    type: TYPES.TRANSACTION_STATUS,
    payload:payload,
}); 


import * as TYPES from '../actionTypes/transactionStatus';

export const setTransactionStatus = (payload:any) => ({
    type: TYPES.TRANSACTION_STATUS,
    payload:payload,
}); 